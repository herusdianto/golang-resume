window.topics = window.topics || [];
window.topics.push({
  id: 'for',
  title: 'For',
  desc: 'Examples of different for forms: traditional for, while-like loop, and range iteration.',
  code: `package main

import "fmt"

func main() {
    // traditional for
    sum := 0
    for i := 0; i < 3; i++ {
        sum += i
    }
    fmt.Println("sum:", sum)

    // while-like
    j := 0
    for j < 3 {
        fmt.Println("j:", j)
        j++
    }

    // range over slice
    arr := []int{10, 20, 30}
    for idx, v := range arr {
        fmt.Println("idx:", idx, "v:", v)
    }
}
`,
  output: 'sum: 3\nj: 0\nj: 1\nj: 2\nidx: 0 v: 10\nidx: 1 v: 20\nidx: 2 v: 30\n'
});
