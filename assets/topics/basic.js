window.topics = window.topics || [];
window.topics.push({
  id: 'basic',
  title: 'Basic syntax',
  desc: 'Minimal Go program structure: package, import, func main.',
  code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
  output: 'Hello, Go!\n'
});
