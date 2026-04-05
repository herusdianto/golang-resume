# Go (Golang) — Resume / Reference

This repository is a concise resume of Go language concepts and examples — a quick reference.

Live demo: [here](https://herusdianto.github.io/golang-resume/)

Topics (located in `assets/topics/`):
- Basics (`basic.js`) — minimal examples and setup
- Comments (`comments.js`) — code commenting conventions
- Variables (`vars.js`) — variable declarations and scope
- Constants (`consts.js`) — const declarations and usage
- Types (`types.js`) — type declarations and conversion
- Printf & Formatting (`printf.js`) — formatting output
- Arithmetic (`aritmatika.js`) — basic numeric operations and expressions
- Logical operators (`logika.js`) — boolean logic and operators
- Arrays (`arrays.js`) — fixed-size collections
- Slices (`slices.js`) — dynamic-length sequences
- Maps (`maps.js`) — key-value collections
- If statements (`if.js`) — conditional branching
- Switch (`switch.js`) — multi-branch selection
- For loops (`for.js`) — loops and iteration patterns
- Break & Continue (`break_continue.js`) — loop control flow
- Functions (`functions.js`) — function declarations and return values
- Closures (`closure.js`) — function literals and closures
- Defer (`defer.js`) — deferred function calls
- Panic (`panic.js`) — causing runtime panics
- Recover (`recover.js`) — recovering from panics
- Structs (`struct.js`) — struct definition, methods, embedding, and pointer/value receivers

Files of interest:
- `index.html` — static resume UI (open in a browser or view the Live demo)
- `assets/style.css` — styling
- `assets/app.js` — minimal UI logic used by the static page
- `assets/refs.js`, `assets/topics/*.js` — topic entries and code snippets

How to use
1. Open `index.html` in a modern browser or visit the Live demo link above.
2. Browse the topics (sidebar) to read short examples and notes.
3. Copy any example code manually and save it to a `.go` file to run locally.
4. To run examples locally: save the snippet to `example.go` and run `go run example.go`.

Notes
- This repository is a compact reference (resume) — it's intentionally simple and static.
- The page uses Prism.js for syntax highlighting and the topics are stored as JS files for ease of maintenance.

Contributing
- Corrections, clarifications, and additional concise examples are welcome. Please open issues or PRs.

License
MIT
