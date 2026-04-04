window.topics = window.topics || [];
window.topics.push({
  id: 'switch',
  title: 'Switch',
  desc: 'Contoh switch: switch multi-case, switch tanpa expression, dan fallthrough.',
  code: `package main

import "fmt"

func main() {
    n := 2
    switch n {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    default:
        fmt.Println("other")
    }

    // switch tanpa ekspresi (menggantikan if-else chains)
    switch {
    case n%2 == 0:
        fmt.Println("even")
    default:
        fmt.Println("odd")
    }

    // fallthrough (contoh sederhana)
    switch 1 {
    case 1:
        fmt.Println("a")
        fallthrough
    case 2:
        fmt.Println("b")
    }
}
`,
  output: 'two\neven\na\nb\n'
});

