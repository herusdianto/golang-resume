window.topics = window.topics || [];
window.topics.push({
  id: 'recover',
  title: 'Recover',
  desc: 'Contoh recover: menggunakan recover dalam fungsi deferred untuk menangkap panic dan melanjutkan eksekusi.',
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

