// topics.js — loader that imports individual topic modules from assets/topics/*.js
// This keeps the topics split into multiple files for maintainability.
window.topics = [];
window.__topicsLoadedPromise = (async function() {
  const topicFiles = [
    'assets/topics/basic.js',
    'assets/topics/go_modules.js',
    'assets/topics/comments.js',
    'assets/topics/vars.js',
    'assets/topics/consts.js',
    'assets/topics/types.js',
    'assets/topics/printf.js',
    'assets/topics/conversion.js',
    'assets/topics/type_decl.js',
    'assets/topics/access_modifier.js',
    'assets/topics/pointer.js',
    'assets/topics/struct.js',
    'assets/topics/interface.js',
    'assets/topics/errors.js',
    'assets/topics/nil.js',
    'assets/topics/aritmatika.js',
    'assets/topics/logika.js',
    'assets/topics/arrays.js',
    'assets/topics/slices.js',
    'assets/topics/maps.js',
    'assets/topics/if.js',
    'assets/topics/switch.js',
    'assets/topics/for.js',
    'assets/topics/break_continue.js',
    'assets/topics/functions.js',
    'assets/topics/closure.js',
    'assets/topics/defer.js',
    'assets/topics/panic.js',
    'assets/topics/recover.js',
  ];
  for (const f of topicFiles) {
    try {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = f;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error('Failed to load ' + f));
        (document.head || document.body || document.documentElement).appendChild(s);
      });
    } catch (e) {
      console.warn('Could not load topic file:', f, e);
    }
  }
  // ensure window.topics exists
  window.topics = window.topics || [];
  return window.topics;
})();
