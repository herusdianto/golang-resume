# Go (Golang) — Concise Resume / Reference

This repository is a short, non-interactive resume of Go language concepts and compact example snippets. It's intended as a quick reference rather than a tutorial.

Live demo: https://herusdianto.github.io/golang-resume/

Topics (sidebar order):
- Basics (`basic.js`) — minimal examples and setup
- Go Modules (`go_modules.js`) — module-aware builds, go.mod/go.sum, and common commands
- Comments (`comments.js`) — code commenting conventions
- Variables (`vars.js`) — variable declarations and scope
- Constants (`consts.js`) — constants and iota
- Types (`types.js`) — built-in types overview
- Printf & Formatting (`printf.js`) — formatting output and common verbs
- Type Conversion (`conversion.js`) — explicit casts, strconv helpers
- Type declarations & assertions (`type_decl.js`) — named types, aliases, methods, and type assertions
- Access / Exporting (`access_modifier.js`) — exported vs unexported identifiers, package visibility, and effects (e.g., JSON marshaling)
- Pointers (`pointer.js`) — addresses, dereference, and pointer receivers
- Structs (`struct.js`) — struct definition, methods, embedding
- Interfaces (`interface.js`) — interface definitions and empty interface
- Errors (`errors.js`) — idiomatic usage of the standard `errors` package and the `error` interface
- Nil (`nil.js`) — nil values for slices, maps, pointers, channels, funcs, and interfaces
- Arithmetic (`aritmatika.js`) — numeric operations
- Logical operators (`logika.js`) — boolean logic
- Arrays (`arrays.js`) — fixed-size collections
- Slices (`slices.js`) — dynamic-length sequences
- Maps (`maps.js`) — key-value collections
- If statements (`if.js`) — conditional branching
- Switch (`switch.js`) — multi-branch selection
- For loops (`for.js`) — loops and iteration patterns
- Break & Continue (`break_continue.js`) — loop control flow
- Functions (`functions.js`) — function declarations and returns
- Closures (`closure.js`) — function literals and closures
- Defer (`defer.js`) — deferred calls
- Panic (`panic.js`) — causing runtime panics
- Recover (`recover.js`) — recovering from panics

How to use
1. Open `index.html` in a browser or visit the Live demo link above.
2. Browse the sidebar topics to read short examples and notes.
3. Copy any example code and save it to a `.go` file to run locally (e.g., `go run example.go`).

Notes
- This is a compact, static reference — not an interactive tutorial.
- The page uses simple JS topic files under `assets/topics/` and `assets/refs.js` for small reference snippets.

Contributing
Corrections and concise additions are welcome via issues or pull requests.

License
MIT
