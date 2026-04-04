window.topics = window.topics || [];
window.topics.push({
  id: 'arrays',
  title: 'Arrays',
  desc: 'Contoh array: deklarasi, akses index, zero-values, dan inisialisasi sebagian.',
  code: `package main

import "fmt"

func main() {
    // Deklarasi dan inisialisasi
    arr := [3]int{1, 2, 3}
    fmt.Println(arr)

    // Akses index
    fmt.Println("arr[0]:", arr[0])

    // Tanpa inisialisasi: nilai nol
    var arr2 [4]int
    fmt.Println("arr2:", arr2)

    // Inisialisasi sebagian (keyed indices)
    arr3 := [5]int{1: 10, 3: 30}
    fmt.Println("arr3:", arr3)
}
`,
  output: '[1 2 3]\narr[0]: 1\narr2: [0 0 0 0]\narr3: [0 10 0 30 0]\n'
});

