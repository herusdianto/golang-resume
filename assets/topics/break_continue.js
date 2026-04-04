window.topics = window.topics || [];
window.topics.push({
  id: 'break_continue',
  title: 'Break & Continue',
  desc: 'Contoh penggunaan break dan continue di dalam loop.',
  code: `package main

import "fmt"

func main() {
    for k := 0; k < 5; k++ {
        if k == 2 {
            continue
        }
        if k == 4 {
            break
        }
        fmt.Println("k:", k)
    }
}
`,
  output: 'k: 0\nk: 1\nk: 3\n'
});

