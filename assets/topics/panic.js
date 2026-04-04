window.topics = window.topics || [];
window.topics.push({
  id: 'panic',
  title: 'Panic',
  desc: 'Contoh panic: memicu panic dan menunjukkan bahwa eksekusi setelah panic tidak berjalan.',
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

