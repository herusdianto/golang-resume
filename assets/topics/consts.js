window.topics = window.topics || [];
window.topics.push({
  id: 'consts',
  title: 'Constants',
  desc: 'Gunakan const untuk nilai tetap.',
  code: `package main

import "fmt"

const PI = 3.14

func main() {
    fmt.Println("PI =", PI)
}`,
  output: 'PI = 3.14\n'
});

