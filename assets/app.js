// Topics are now kept in a separate file `assets/topics.js` to keep this file smaller and more maintainable.
// Try to reuse `window.topics` if the file is already loaded (e.g., during development hot-reload).
let topics = window.topics || [];

// Element refs will be assigned in init()
let topicsList;
let highlightedCode;
let topicTitle;
let topicDesc;
let playForm;
let playBody;
let typesRefEl; // reference to the types reference section

// State
let currentTopic = null; // set after topics are loaded in init()
let topicOutputEl; // element to show topic output
let topicOutputLabelEl; // label element that shows "Output" above the output

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load ' + src));
    const container = document.head || document.body || document.documentElement;
    if (container) container.appendChild(s);
    else document.appendChild(s);
  });
}

async function ensurePrismGo() {
  // Load Prism Go component if Prism is available but language not present
  if (window.Prism && (!Prism.languages || !Prism.languages.go)) {
    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-go.min.js');
    } catch (e) {
      console.warn('Could not load Prism Go component:', e);
    }
  }
}

// NOTE: types/printf reference HTML moved to `assets/refs.js` which exposes
// window.typesReferenceHtml and window.printfReferenceHtml. We will read
// those at runtime in init() to inject into the DOM.

// Update the topics array: replace the long HTML desc with a brief summary for types
const typesTopicIndex = topics.findIndex(t => t.id === 'types');
if (typesTopicIndex !== -1) {
  topics[typesTopicIndex].desc = 'Summary of Go basic data types. Full details available below (Types Reference).';
}

// Move printf reference HTML into a separate constant
const printfReferenceHtml = `<div class="printf-ref">
  <p>Example <code>fmt.Printf</code> using format verbs and width/precision options.</p>
  <table class="type-table">
    <thead><tr><th>Verb</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>%v</td><td>Default format for value</td><td><code>fmt.Printf("%v", x)</code></td></tr>
      <tr><td>%T</td><td>Type of the value</td><td><code>fmt.Printf("%T", x)</code></td></tr>
      <tr><td>%s</td><td>String</td><td><code>%s</code></td></tr>
      <tr><td>%d</td><td>Decimal integer</td><td><code>%d</code></td></tr>
      <tr><td>%f</td><td>Floating-point (default 6 dec places)</td><td><code>%.2f</code></td></tr>
      <tr><td>%t</td><td>Boolean</td><td><code>%t</code></td></tr>
      <tr><td>%#x</td><td>Hex with 0x prefix</td><td><code>%#x</code></td></tr>
      <tr><td>%q</td><td>Double-quoted string</td><td><code>%q</code></td></tr>
      <tr><td>%p</td><td>Pointer address</td><td><code>%p</code></td></tr>
    </tbody>
  </table>
  <p>Width/precision options: <code>%6d</code> (width), <code>%-10s</code> (left align), <code>%06d</code> (zero pad), <code>%8.3f</code> (width + precision).</p>
</div>`;
// Use as fallback if refs.js didn't set a window.printfReferenceHtml
window.printfReferenceHtml = window.printfReferenceHtml || printfReferenceHtml;

// Update printf topic: keep short desc only (table moved)
const printfTopicIndex = topics.findIndex(t => t.id === 'printf');
if (printfTopicIndex !== -1) {
  topics[printfTopicIndex].desc = 'Printf examples; full format reference is available below (Printf Reference).';
}

async function init() {
  // Try to load refs and topics if they are not already present on window
  try {
    if (!window.typesReferenceHtml || !window.printfReferenceHtml) {
      // load refs.js which sets window.typesReferenceHtml and window.printfReferenceHtml
      await loadScript('assets/refs.js');
    }
  } catch (e) {
    console.warn('Could not load refs.js dynamically:', e);
  }

  try {
    if (!window.topics || !window.topics.length) {
      // load topics.js which sets window.topics
      await loadScript('assets/topics.js');
    }
    // if loader exposes a promise, wait for individual topic files to load
    if (window.__topicsLoadedPromise && typeof window.__topicsLoadedPromise.then === 'function') {
      try { await window.__topicsLoadedPromise; } catch(e) { console.warn('topics loader promise failed:', e); }
    }
    topics = window.topics || topics || [];
  } catch (e) {
    console.warn('Could not load topics.js dynamically:', e);
  }

  // Query DOM elements (do this inside init to ensure DOM is ready)
  topicsList = document.getElementById('topicsList');
  highlightedCode = document.getElementById('highlightedCode');
  topicTitle = document.getElementById('topicTitle');
  topicDesc = document.getElementById('topicDesc');
  playForm = document.getElementById('playForm');
  playBody = document.getElementById('playBody');

  // create output preview element under the code preview if missing
  try {
    topicOutputEl = document.getElementById('topicOutput');
    topicOutputLabelEl = document.getElementById('topicOutputLabel');
    if (!topicOutputEl && highlightedCode && highlightedCode.parentElement) {
      // create label for the output preview
      const label = document.createElement('div');
      label.id = 'topicOutputLabel';
      label.className = 'topic-output-label';
      label.innerHTML = '<h3>Output:</h3>';
      label.style.display = 'none';

      const pre = document.createElement('pre');
      pre.id = 'topicOutput';
      pre.className = 'topic-output';
      const code = document.createElement('code');
      pre.appendChild(code);

      // insert after the <pre> that contains highlightedCode: first insert label, then pre
      const ref = highlightedCode.parentElement;
      if (ref && ref.parentNode) {
        ref.parentNode.insertBefore(label, ref.nextSibling);
        ref.parentNode.insertBefore(pre, label.nextSibling);
      }
      topicOutputEl = pre;
      topicOutputLabelEl = label;
    }
  } catch (e) {
    console.warn('Could not create topicOutput element:', e);
  }

  // Apply saved theme preference (if any) before rendering icon
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light');
    }
  } catch (e) {
    // ignore storage errors
  }

  // Inject types reference HTML into #typesRef if present (use window value)
  typesRefEl = document.getElementById('typesRef');
  if (typesRefEl) {
    typesRefEl.innerHTML = window.typesReferenceHtml || '';
    typesRefEl.classList.remove('active');
    typesRefEl.setAttribute('aria-hidden', 'true');
  }

  // Inject printf reference HTML into #printfRef if present
  const printfRefEl = document.getElementById('printfRef');
  if (printfRefEl) {
    printfRefEl.innerHTML = window.printfReferenceHtml || '';
    printfRefEl.classList.remove('active');
    printfRefEl.setAttribute('aria-hidden', 'true');
  }

  // Populate topic list (ensure topics exists)
  if (topics && topics.forEach) {
    topics.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t.title;
      li.dataset.id = t.id;
      li.addEventListener('click', () => selectTopic(t.id));
      if (topicsList) topicsList.appendChild(li);
    });
  }

  // Attempt to restore last selected topic from localStorage
  try {
    const last = localStorage.getItem('lastTopic');
    if (last && topics.find(x => x.id === last)) {
      currentTopic = topics.find(x => x.id === last);
    }
  } catch (e) {
    // If localStorage not available (privacy mode), ignore silently
    console.warn('localStorage not available:', e);
  }

  if (!currentTopic) currentTopic = topics && topics.length ? topics[0] : null;

  selectTopic(currentTopic ? currentTopic.id : (topics[0] && topics[0].id));

  // Buttons
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const playgroundBtn = document.getElementById('playgroundBtn');
  const themeToggle = document.getElementById('themeToggle');

  if (copyBtn) copyBtn.addEventListener('click', copyCode);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadCode);
  if (playgroundBtn) playgroundBtn.addEventListener('click', openPlayground);
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // set initial icon state
  updateThemeIcon();

  const typesRefBtn = document.getElementById('typesRefBtn');
  if (typesRefBtn) {
    // hide by default; selectTopic will show only on types
    typesRefBtn.style.display = 'none';
    typesRefBtn.addEventListener('click', () => {
      selectTopic('types');
      if (typesRefEl) typesRefEl.scrollIntoView({behavior: 'smooth'});
    });
  }

  // Load Prism Go language component if Prism exists; then highlight current content
  if (window.Prism) {
    ensurePrismGo().then(() => updateHighlight()).catch(() => updateHighlight());
  } else {
    // Prism not loaded; still show plain text
    updateHighlight();
  }
}

function selectTopic(id) {
  const t = topics.find(x => x.id === id);
  if (!t) return;
  currentTopic = t;

  // save last selected topic to localStorage (safe-guarded)
  try {
    localStorage.setItem('lastTopic', id);
  } catch (e) {
    // ignore if storage unavailable
  }

  // update any visual active state on the sidebar list
  if (topicsList) {
    Array.from(topicsList.children).forEach(li => {
      if (li.dataset && li.dataset.id === id) li.classList.add('active'); else li.classList.remove('active');
    });
  }

  // Show typesRef only when topic is 'types'
  if (typesRefEl) {
    if (id === 'types') {
      typesRefEl.classList.add('active');
      typesRefEl.setAttribute('aria-hidden', 'false');
      // show the typesRefBtn while on types
      const btn = document.getElementById('typesRefBtn'); if (btn) btn.style.display = '';
    } else {
      typesRefEl.classList.remove('active');
      typesRefEl.setAttribute('aria-hidden', 'true');
      const btn = document.getElementById('typesRefBtn'); if (btn) btn.style.display = 'none';
    }
  }

  // Show printfRef only when topic is 'printf'
  const printfRefEl2 = document.getElementById('printfRef');
  if (printfRefEl2) {
    if (id === 'printf') {
      printfRefEl2.classList.add('active');
      printfRefEl2.setAttribute('aria-hidden', 'false');
    } else {
      printfRefEl2.classList.remove('active');
      printfRefEl2.setAttribute('aria-hidden', 'true');
    }
  }

  if (topicDesc) {
    // Render desc as HTML only when it looks like HTML (e.g., starts with '<')
    if (typeof t.desc === 'string' && t.desc.trim().startsWith('<')) {
      topicDesc.innerHTML = t.desc;
    } else {
      topicDesc.textContent = t.desc;
    }
  }
  if (topicTitle) topicTitle.textContent = t.title;
  // populate highlighted read-only code
  if (highlightedCode) highlightedCode.textContent = t.code;
  updateHighlight();

  // populate output preview (if any)
  updateOutput(t && t.output ? t.output : '');
}

function updateOutput(text) {
  try {
    if (!topicOutputEl) return;
    const code = topicOutputEl.querySelector('code');
    if (!code) return;
    if (text && text.length) {
      code.textContent = text;
      topicOutputEl.style.display = '';
      topicOutputEl.setAttribute('aria-hidden', 'false');
      if (topicOutputLabelEl) {
        topicOutputLabelEl.style.display = '';
        topicOutputLabelEl.setAttribute('aria-hidden', 'false');
      }
    } else {
      code.textContent = '';
      topicOutputEl.style.display = 'none';
      topicOutputEl.setAttribute('aria-hidden', 'true');
      if (topicOutputLabelEl) {
        topicOutputLabelEl.style.display = 'none';
        topicOutputLabelEl.setAttribute('aria-hidden', 'true');
      }
    }
  } catch (e) {
    console.warn('updateOutput error:', e);
  }
}

function updateHighlight() {
  if (!highlightedCode) return;
  // Prism highlight (guarded) - highlightedCode.textContent should already be set
  try {
    if (window.Prism && typeof Prism.highlightElement === 'function') {
      Prism.highlightElement(highlightedCode);
    }
  } catch (e) {
    console.warn('Prism highlight error:', e);
  }
}

async function copyCode() {
  try {
    const code = currentTopic && currentTopic.code ? currentTopic.code : '';
    await navigator.clipboard.writeText(code);
    alert('Code copied to clipboard');
  } catch (e) {
    alert('Failed to copy: ' + e.message);
  }
}

function downloadCode() {
  const code = currentTopic && currentTopic.code ? currentTopic.code : '';
  const blob = new Blob([code], {type: 'text/plain'});
  const a = document.createElement('a');
  const filename = (currentTopic && currentTopic.id ? currentTopic.id : 'code') + '.go';
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  const container = document.body || document.documentElement || document;
  try {
    container.appendChild(a);
    a.click();
    a.remove();
  } catch (e) {
    window.open(a.href, '_blank');
  }
}

function openPlayground() {
  if (!playForm || !playBody) {
    alert('Play form not available. Please copy the code manually to https://play.golang.org');
    return;
  }
  playBody.value = currentTopic && currentTopic.code ? currentTopic.code : '';
  try {
    playForm.submit();
  } catch (e) {
    alert('Could not open Go Playground automatically. Please copy the code and open https://play.golang.org');
  }
}

function toggleTheme() {
  // toggle the page theme (light class). We then update the icon to reflect current state.
  document.documentElement.classList.toggle('light');
  // persist preference
  try {
    const isLight = document.documentElement.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  } catch (e) {
    // ignore storage errors
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcon = document.getElementById('themeToggle');
  if (!themeIcon) return;
  // isDark = true when current theme is dark (i.e., no 'light' class)
  const isDark = !document.documentElement.classList.contains('light');
  if (isDark) {
    themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`;
    themeIcon.setAttribute('aria-label', 'Switch to light theme');
    themeIcon.title = 'Switch to light theme';
  } else {
    themeIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    themeIcon.setAttribute('aria-label', 'Switch to dark theme');
    themeIcon.title = 'Switch to dark theme';
  }
}

// Ensure init calls updateThemeIcon() after wiring the theme toggle listener
// Init on DOM ready
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
