window.topics = window.topics || [];
window.topics.push({
  id: 'comments',
  title: 'Komentar',
  desc: 'Komentar satu baris dan multi-baris.',
  code: `package main

import "fmt"

// Ini komentar satu baris
/* Ini komentar
   multi-line */

func main() {
    fmt.Println("Komentar tidak muncul di output")
}`,
  output: 'Komentar tidak muncul di output\n'
});

