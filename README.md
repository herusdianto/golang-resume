# Go (Golang) — Concise Resume / Reference

This repository is a short, non-interactive resume of Go language concepts and compact example snippets. It's intended as a quick reference rather than a tutorial.

Live demo: https://herusdianto.github.io/golang-resume/

Topics (sidebar order):
- Basic syntax (`basic.js`) — Minimal Go program structure: package, import, func main.
- Go Modules (`go_modules.js`) — Module-aware builds: go.mod/go.sum, initializing modules, `go get`, `go mod tidy`, semantic import versioning, and replace directives.
- Comments (`comments.js`) — Single-line and multi-line comments.
- Variables (`vars.js`) — Variable declarations with var and short declaration :=
- Constants (`consts.js`) — Use const for constant values.
- init() & Blank Identifier (`init_blank.js`) — The special init() function runs before main; multiple init() in a package run in file order. The blank identifier (`_`) discards values or imports packages for side effects.
- Basic data types (`types.js`) — Summary of Go basic data types. Full details available below (Types Reference).
- Printf (`printf.js`) — Printf examples using format verbs and width/precision options. See the reference for details.
- Type Conversion (`conversion.js`) — Explicit type conversions in Go: numeric casts, string/byte conversions, and strconv helpers.
- Type (`type_decl.js`) — Type aliases vs new types, type conversion, methods on named types, interface usage and type assertions/type switches.
- Access Modifier (`access_modifier.js`) — Exported vs unexported identifiers in Go: capitalization rule, package visibility, and practical effects such as JSON marshaling.
- Pointers (`pointer.js`) — Pointer basics: address (&), dereference (*), nil pointers, pointers to structs, and pointer vs value receiver behavior.
- Structs (`struct.js`) — Composite types: struct definition, zero value, methods, pointer receivers, and embedding.
- Interfaces (`interface.js`) — Interfaces define behavior by method sets. Examples: implementation by structs, type assertions and type switches, empty interface usage.
- Errors (`errors.js`) — Examples using the standard library `errors` package: sentinel errors, wrapping with %w, errors.Is, errors.As, errors.Unwrap, and custom error types.
- Nil (`nil.js`) — Nil values and zero values: behavior for slices, maps, pointers, channels, funcs, and interfaces; common pitfalls.
- Arithmetic (`aritmatika.js`) — Basic arithmetic operations: addition, subtraction, multiplication, division, and more.
- Logical (`logika.js`) — Logical operators: && (AND), || (OR), and ! (NOT). Examples include short-circuiting and combinations with comparisons.
- Arrays (`arrays.js`) — Array examples: declaration, index access, zero-values, and partial initialization.
- Slices (`slices.js`) — Slice examples: literals, make, slicing from array, append, reslice, copy, and len/cap behavior.
- Maps (`maps.js`) — Map examples: literals, key access, the value, ok idiom, iteration, and delete.
- If / Else (`if.js`) — If statement examples: if, if-else, and if with a short statement before the condition.
- Switch (`switch.js`) — Switch examples: multi-case switch, switch without expression, and fallthrough.
- For (`for.js`) — Examples of different for forms: traditional for, while-like loop, and range iteration.
- Break & Continue (`break_continue.js`) — Examples of using break and continue inside loops.
- Functions (`functions.js`) — Defining and calling functions: named, anonymous, variadic, function-as-value, function-as-parameter, and recursion.
- Closure (`closure.js`) — Examples of closures: capturing outer variables, closures with internal state, and closure factories.
- Defer (`defer.js`) — Examples of defer: LIFO execution, immediate argument evaluation, and closure capture.
- Panic (`panic.js`) — Example of panic: triggering a panic and showing that execution after panic does not continue.
- Recover (`recover.js`) — Example of recover: using recover in a deferred function to catch panic and continue execution.
- Unit Testing (`unit_test.js`) — Introduction to Go testing: the `testing` package, table-driven tests, subtests, `TestMain`, benchmarks, and common `go test` commands.
- HTTP Router (`http_router.js`) — Routing with the standard `net/http` (ServeMux & Handler) and common patterns: handler funcs, middleware, URL params and brief mention of third-party routers.
- RESTful API (`restful_api.js`) — Building JSON-based REST APIs with the standard library: handlers, request decoding, response encoding, status codes, routing patterns, and graceful shutdown.
- Logging (`logging.js`) — Logging with the standard `log` package: flags, prefixes, custom loggers, basic structured logging patterns, and notes about third-party loggers (logrus, zerolog). Also include request-scoped logging tips (request-id) and performance notes.
- Goroutines & Channels (`goroutine.js`) — Concurrency basics: launching goroutines with `go`, communicating via channels (buffered/unbuffered), `select`, and simple synchronization with `sync.WaitGroup`.
- Context (`context.js`) — The `context` package: cancellation, timeouts/deadlines, passing request-scoped values, and best-practices for goroutines and API boundaries.

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
