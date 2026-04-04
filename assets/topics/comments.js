window.topics = window.topics || [];
window.topics.push({
  id: 'comments',
  title: 'Comments',
  desc: 'Single-line and multi-line comments.',
  code: `package main

import "fmt"

// This is a single-line comment
/* This is a
   multi-line comment */

func main() {
    fmt.Println("Comments do not appear in output")
}`,
  output: 'Comments do not appear in output\n'
});
