window.topics = window.topics || [];
window.topics.push({
  id: 'basic',
  title: 'Basic syntax',
  desc: 'Struktur minimal program Go: package, import, func main.',
  code: `package main

import "fmt"

func main() {
    fmt.Println("Halo, Go!")
}`,
  output: 'Halo, Go!\n'
});

