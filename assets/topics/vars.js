window.topics = window.topics || [];
window.topics.push({
  id: 'vars',
  title: 'Variabel',
  desc: 'Deklarasi variabel dengan var dan short declaration :=',
  code: `package main

import "fmt"

func main() {
    var x int = 10
    y := 20

    // Contoh blok deklarasi var
    var (
        a int = 5
        b = 3
        s string = "hi"
    )

    // Contoh deklarasi tanpa blok: beberapa variabel di satu baris
    var m, n int = 7, 8

    // Contoh short declaration dengan banyak assignment
    p, q := 9, 10

    fmt.Println(x + y)
    fmt.Println(a + b, s)
    fmt.Println(m, n)
    fmt.Println(p, q)
}`,
  output: '30\n8 hi\n7 8\n9 10\n'
});

