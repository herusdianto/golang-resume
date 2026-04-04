window.topics = window.topics || [];
window.topics.push({
  id: 'vars',
  title: 'Variables',
  desc: 'Variable declarations with var and short declaration :=',
  code: `package main

import "fmt"

func main() {
    var x int = 10
    y := 20

    // Example var declaration block
    var (
        a int = 5
        b = 3
        s string = "hi"
    )

    // Example multiple variables in one line
    var m, n int = 7, 8

    // Short declaration with multiple assignment
    p, q := 9, 10

    fmt.Println(x + y)
    fmt.Println(a + b, s)
    fmt.Println(m, n)
    fmt.Println(p, q)
}`,
  output: '30\n8 hi\n7 8\n9 10\n'
});
