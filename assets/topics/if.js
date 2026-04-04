window.topics = window.topics || [];
window.topics.push({
  id: 'if',
  title: 'If / Else',
  desc: 'Contoh pernyataan if, if-else, dan if dengan statement sebelum kondisi.',
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

    // if dengan short statement
    if v := x * 2; v > 8 {
        fmt.Println("v > 8")
    } else {
        fmt.Println("v <= 8")
    }
}
`,
  output: 'x > 3\nv > 8\n'
});

