window.topics = window.topics || [];
window.topics.push({
  id: 'conversion',
  title: 'Type Conversion',
  desc: 'Explicit type conversions in Go: numeric casts, string/byte conversions, and strconv helpers.',
  code: `package main

import (
    "fmt"
    "strconv"
)

func main() {
    // Numeric conversions (explicit)
    var i int = 42
    var f float64 = float64(i) / 3.0
    fmt.Printf("int -> float: %v (type %T)", f, f)

    var x float64 = 3.99
    var xi int = int(x) // truncates toward zero
    fmt.Printf("float -> int (trunc): %v (type %T)", xi, xi)

    // Rune / string conversions
    s := "hi"
    b := []byte(s) // string -> []byte (copy)
    fmt.Printf("string -> []byte: %v (type %T)", b, b)

    // []byte -> string
    sb := string([]byte{0xE2, 0x98, 0x83}) // UTF-8 bytes -> string
    fmt.Printf("bytes -> string: %s", sb)

    // strconv helpers for numeric <-> string conversions
    n := 123
    ns := strconv.Itoa(n)
    fmt.Println("Itoa:", ns)

    fstr := "3.1415"
    if fv, err := strconv.ParseFloat(fstr, 64); err == nil {
        fmt.Printf("ParseFloat: %v (type %T)", fv, fv)
    }

    // strconv.Atoi
    if i2, err := strconv.Atoi("456"); err == nil {
        fmt.Println("Atoi:", i2)
    }
}
`,
  output: "int -> float: 14 (type float64)\nfloat -> int (trunc): 3 (type int)\nstring -> []byte: [104 105] (type []uint8)\nbytes -> string: ☃\nItoa: 123\nParseFloat: 3.1415 (type float64)\nAtoi: 456\n"
});

