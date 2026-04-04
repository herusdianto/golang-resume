window.topics = window.topics || [];
window.topics.push({
  id: 'defer',
  title: 'Defer',
  desc: 'Examples of defer: LIFO execution, immediate argument evaluation, and closure capture.',
  code: `package main

import "fmt"

func main() {
    i := 0
    defer fmt.Println("defer with arg:", i)
    i = 1
    defer func() { fmt.Println("defer closure captured:", i) }()

    fmt.Println("i:", i)
}
`,
  output: 'i: 1\ndefer closure captured: 1\ndefer with arg: 0\n'
});
