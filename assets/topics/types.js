window.topics = window.topics || [];
window.topics.push({
  id: 'types',
  title: 'Tipe data dasar',
  desc: 'Ringkasan tipe data dasar di Go. Detail lengkap tersedia di bawah (Referensi Tipe Data).',
  code: `package main

import (
    "fmt"
)

func main() {
    var a int8 = 127
    var b uint8 = 255
    var c int16 = -32768
    var d int32 = 2147483647
    var e int64 = 9223372036854775807

    var f float32 = 3.14
    var g float64 = 1.23456789012345

    var r rune = '世'   // rune is int32
    var byt byte = 0x7A // byte is uint8

    var s string = "Halo, tipe data Go"
    var bo bool = true

    fmt.Println(a, b, c, d, e)
    fmt.Println(f, g)
    fmt.Println(r, byt, s, bo)
}`,
  output: '127 255 -32768 2147483647 9223372036854775807\n3.14 1.23456789012345\n19990 122 Halo, tipe data Go true\n'
});

