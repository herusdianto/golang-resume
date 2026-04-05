// topics.js — loader that imports individual topic modules from assets/topics/*.js
// This keeps the topics split into multiple files for maintainability.
window.topics = [];
window.__topicsLoadedPromise = (async function() {
  const topicFiles = [
    // Basics and environment
    'assets/topics/basic.js',
    'assets/topics/go_modules.js',
    'assets/topics/comments.js',

    // Declarations & initialization
    'assets/topics/vars.js',
    'assets/topics/consts.js',
    'assets/topics/init_blank.js',

    // Types and formatting
    'assets/topics/types.js',
    'assets/topics/printf.js',
    'assets/topics/conversion.js',

    // Type system, methods, and visibility
    'assets/topics/type_decl.js',
    'assets/topics/access_modifier.js',

    // Pointers, structs, interfaces, errors
    'assets/topics/pointer.js',
    'assets/topics/struct.js',
    'assets/topics/interface.js',
    'assets/topics/errors.js',
    'assets/topics/nil.js',

    // Basic operations and compound types
    'assets/topics/aritmatika.js',
    'assets/topics/logika.js',
    'assets/topics/arrays.js',
    'assets/topics/slices.js',
    'assets/topics/maps.js',

    // Control flow
    'assets/topics/if.js',
    'assets/topics/switch.js',
    'assets/topics/for.js',
    'assets/topics/break_continue.js',

    // Functions and closures
    'assets/topics/functions.js',
    'assets/topics/closure.js',

    // Defer / panic / recover
    'assets/topics/defer.js',
    'assets/topics/panic.js',
    'assets/topics/recover.js',

    // Unit testing
    'assets/topics/unit_test.js',
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
