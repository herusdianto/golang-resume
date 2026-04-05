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
    fmt.Printf("int -> float: %v (type %T)\\n", f, f)

    var x float64 = 3.99
    var xi int = int(x) // truncates toward zero
    fmt.Printf("float -> int (trunc): %v (type %T)\\n", xi, xi)

    // Converting between small integer types
    var a int8 = 100
    var b int16 = int16(a)
    var c int32 = int32(b)
    fmt.Printf("int8 -> int16 -> int32: %v %v %v (types: %T %T %T)\\n", a, b, c, a, b, c)

    // Signed to unsigned conversion (possible bit reinterpretation)
    var s int8 = -1
    var u uint8 = uint8(s)
    fmt.Printf("int8(-1) -> uint8: %v (0x%x)\\n", u, u)

    // Overflow / truncation example: converting 200 -> int8
    var big int = 200
    var small int8 = int8(big) // 200 overflows int8 (wraps/truncates)
    fmt.Printf("int 200 -> int8: %v (0x%x)\\n", small, small)

    // Rune / string conversions
    s2 := "hi"
    b2 := []byte(s2) // string -> []byte (copy)
    fmt.Printf("string -> []byte: %v (type %T)\\n", b2, b2)

    // []byte -> string
    sb := string([]byte{0xE2, 0x98, 0x83}) // UTF-8 bytes -> string
    fmt.Printf("bytes -> string: %s\\n", sb)

    // strconv helpers for numeric <-> string conversions
    n := 123
    ns := strconv.Itoa(n)
    fmt.Println("Itoa:", ns)

    fstr := "3.1415"
    if fv, err := strconv.ParseFloat(fstr, 64); err == nil {
        fmt.Printf("ParseFloat: %v (type %T)\\n", fv, fv)
    }

    // strconv.Atoi
    if i2, err := strconv.Atoi("456"); err == nil {
        fmt.Println("Atoi:", i2)
    }
}
`,
  output: "int -> float: 14 (type float64)\nfloat -> int (trunc): 3 (type int)\nint8 -> int16 -> int32: 100 100 100 (types: int8 int16 int32)\nint8(-1) -> uint8: 255 (0xff)\nint 200 -> int8: -56 (0xc8)\nstring -> []byte: [104 105] (type []uint8)\nbytes -> string: ☃\nItoa: 123\nParseFloat: 3.1415 (type float64)\nAtoi: 456\n"
});
