window.topics = window.topics || [];
window.topics.push({
  id: 'maps',
  title: 'Maps',
  desc: 'Contoh map: literal, akses key, idiom ok (value, ok), iterasi, dan delete.',
  code: `package main

import "fmt"

func main() {
    m := map[string]int{"a":1, "b":2}
    fmt.Println(m)

    // Akses key
    fmt.Println("m[\"a\"]:", m["a"])

    // TANPA inisialisasi -> nilai nol (zero values)
    var arr2 [4]int
    var sl2 []int
    var m2 map[string]int
    fmt.Println("arr2:", arr2)
    fmt.Println("sl2 nil?:", sl2 == nil, "len:", len(sl2))
    fmt.Println("m2 nil?:", m2 == nil)

    // Inisialisasi sebagian (partial initialization)
    arr3 := [5]int{1: 10, 3: 30}
    sl3 := []int{0: 7, 2: 9}
    m3 := map[string]int{"a":1}
    fmt.Println("arr3:", arr3)
    fmt.Println("sl3:", sl3)  
    fmt.Println("m3[\"a\"]:", m3["a"])
    v, ok := m3["b"]
    fmt.Println("m3[\"b\"]:", v, ok)

    // Membuat slice dari array (slice view ke array)
    fmt.Println("arr (before):", arr)
    sliceFromArr := arr[0:2]
    fmt.Println("sliceFromArr:", sliceFromArr)
    // Modifikasi lewat slice mempengaruhi array
    sliceFromArr[0] = 99
    fmt.Println("sliceFromArr (after):", sliceFromArr)
    fmt.Println("arr (after slice modification):", arr)

    // Membuat slice menggunakan make
    newSl := make([]int, 3) // length 3, zero values
    fmt.Println("newSl (make):", newSl)

    newSl2 := make([]int, 2, 5) // length 2, capacity 5
    fmt.Println("newSl2 len/cap:", len(newSl2), cap(newSl2))

    // Menambahkan elemen ke slice (append)
    fmt.Println("newSl before append len/cap:", len(newSl), cap(newSl))
    newSl = append(newSl, 7)
    fmt.Println("newSl after append:", newSl)
    fmt.Println("newSl after append len/cap:", len(newSl), cap(newSl))

    // Modify element
    newSl[0] = 42
    fmt.Println("newSl after modify:", newSl)

    // Reslice (mengubah length)
    newSl = newSl[:2]
    fmt.Println("newSl after reslice to len 2:", newSl, "len/cap:", len(newSl), cap(newSl))

    // Copy
    copyTarget := make([]int, len(newSl))
    copy(copyTarget, newSl)
    fmt.Println("copyTarget (copied):", copyTarget)
    copyTarget[0] = 7
    fmt.Println("copyTarget after modify:", copyTarget)
    fmt.Println("newSl remains:", newSl)
}
`,
  output: 'map[a:1 b:2]\nm["a"]: 1\narr2: [0 0 0 0]\nsl2 nil?: true len: 0\nm2 nil?: true\narr3: [0 10 0 30 0]\nsl3: [7 0 9]\nm3["a"]: 1\nm3["b\"]: 0 false\narr (before): [1 2 3]\nsliceFromArr: [1 2]\nsliceFromArr (after): [99 2]\narr (after slice modification): [99 2 3]\nnewSl (make): [0 0 0]\nnewSl2 len/cap: 2 5\nnewSl before append len/cap: 3 3\nnewSl after append: [0 0 0 7]\nnewSl after append len/cap: 4 <cap may grow>\nnewSl after modify: [42 0 0 7]\nnewSl after reslice to len 2: [42 0] len/cap: 2 <cap preserved>\ncopyTarget (copied): [42 0]\ncopyTarget after modify: [7 0]\nnewSl remains: [42 0]\n'
});

