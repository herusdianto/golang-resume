window.topics = window.topics || [];
window.topics.push({
  id: 'init_blank',
  title: 'init() & Blank Identifier',
  desc: 'The special init() function runs before main; multiple init() in a package run in file order. The blank identifier (`_`) discards values or imports packages for side effects.',
  code: `package main

import (
    "fmt"
    _ "net/http/pprof" // blank import: import for side-effects (registers pprof handlers)
)

func init() {
    fmt.Println("init() - first")
}

func init() {
    fmt.Println("init() - second")
}

func example() (int, error) {
    return 5, nil
}

func two() (int, int) {
    return 100, 200
}

func main() {
    // Blank identifier '_' to ignore a returned error or unwanted value
    v, _ := example()
    fmt.Println("example v:", v)

    // Ignore the first return value
    _, b := two()
    fmt.Println("two b:", b)

    // Ignore index in range
    for _, val := range []int{1, 2, 3} {
        fmt.Println("range val:", val)
    }

    // Blank identifier can be used to explicitly ignore a value and avoid "declared and not used" errors
    _ = v // explicit discard (no-op)

    fmt.Println("main done")
}
`,
  output: "init() - first\ninit() - second\nexample v: 5\ntwo b: 200\nrange val: 1\nrange val: 2\nrange val: 3\nmain done\n"
});

