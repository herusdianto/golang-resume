window.topics = window.topics || [];
window.topics.push({
  id: 'if',
  title: 'If / Else',
  desc: 'If statement examples: if, if-else, and if with a short statement before the condition.',
  code: `package main

import "fmt"

func main() {
    x := 5

    if x < 3 {
        fmt.Println("x < 3")
    } else if x == 3 {
        fmt.Println("x == 3")
    } else {
        fmt.Println("x > 3")
    }

    // if with short statement
    if v := x * 2; v > 8 {
        fmt.Println("v > 8")
    } else {
        fmt.Println("v <= 8")
    }
}
`,
  output: 'x > 3\nv > 8\n'
});
