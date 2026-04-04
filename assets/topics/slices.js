window.topics = window.topics || [];
window.topics.push({
  id: 'slices',
  title: 'Slices',
  desc: 'Slice examples: literals, make, slicing from array, append, reslice, copy, and len/cap behavior.',
  code: `package main

import "fmt"

func main() {
    // Literal slice
    sl := []int{4, 5, 6}
    fmt.Println(sl)
    fmt.Println("sl[1]:", sl[1])

    // Create a slice with make
    newSl := make([]int, 3)
    fmt.Println("newSl (make):", newSl)

    newSl2 := make([]int, 2, 5)
    fmt.Println("newSl2 len/cap:", len(newSl2), cap(newSl2))

    // Slice from array (view to backing array)
    arr := [3]int{1, 2, 3}
    sliceFromArr := arr[0:2]
    fmt.Println("sliceFromArr:", sliceFromArr)
    sliceFromArr[0] = 99
    fmt.Println("sliceFromArr (after):", sliceFromArr)
    fmt.Println("arr (after slice modification):", arr)

    // Append (add elements)
    fmt.Println("newSl before append len/cap:", len(newSl), cap(newSl))
    newSl = append(newSl, 7)
    fmt.Println("newSl after append:", newSl)
    fmt.Println("newSl after append len/cap:", len(newSl), cap(newSl))

    // Modify element
    newSl[0] = 42
    fmt.Println("newSl after modify:", newSl)

    // Reslice (change length)
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
  output: '[4 5 6]\nsl[1]: 5\nnewSl (make): [0 0 0]\nnewSl2 len/cap: 2 5\nsliceFromArr: [1 2]\nsliceFromArr (after): [99 2]\narr (after slice modification): [99 2 3]\nnewSl before append len/cap: 3 3\nnewSl after append: [0 0 0 7]\nnewSl after append len/cap: 4 <cap may grow>\nnewSl after modify: [42 0 0 7]\nnewSl after reslice to len 2: [42 0] len/cap: 2 <cap preserved>\ncopyTarget (copied): [42 0]\ncopyTarget after modify: [7 0]\nnewSl remains: [42 0]\n'
});
