window.topics = window.topics || [];
window.topics.push({
  id: 'recover',
  title: 'Recover',
  desc: 'Example of recover: using recover in a deferred function to catch panic and continue execution.',
  code: `package main

import "fmt"

func safe() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("recovered:", r)
        }
    }()
    panic("something bad")
}

func main() {
    fmt.Println("calling safe")
    safe()
    fmt.Println("after safe")
}
`,
  output: 'calling safe\nrecovered: something bad\nafter safe\n'
});
