window.topics = window.topics || [];
window.topics.push({
  id: 'panic',
  title: 'Panic',
  desc: 'Example of panic: triggering a panic and showing that execution after panic does not continue.',
  code: `package main

import "fmt"

func willPanic() {
    panic("something went wrong")
}

func main() {
    fmt.Println("before panic")
    willPanic()
    fmt.Println("after panic")
}
`,
  output: 'before panic\npanic: something went wrong\n'
});
