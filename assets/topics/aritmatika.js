window.topics = window.topics || [];
window.topics.push({
  id: 'aritmatika',
  title: 'Aritmatika',
  desc: 'Operasi aritmatika dasar: penjumlahan, pengurangan, perkalian, pembagian dan lainnya.',
  code: `package main

import (
    "fmt"
    "math"
)

func main() {
    a := 7
    b := 3

    fmt.Println("a + b =", a + b)
    fmt.Println("a - b =", a - b)
    fmt.Println("a * b =", a * b)
    fmt.Println("a / b =", a / b)
    fmt.Println("a % b =", a % b)

    x := 7.0
    y := 3.0
    fmt.Println("x / y =", x / y)

    // mixed types: convert explicitly
    fmt.Println("mixed:", float64(a) / float64(b))

    // power using math
    fmt.Println("power:", math.Pow(2, 3))

    // increment (statement)
    i := 1
    i++
    fmt.Println("i after i++", i)

    // decrement (statement)
    j := 2
    j--
    fmt.Println("j after j--", j)

    // precedence
    fmt.Println("precedence:", 1 + 2 * 3)

    // assignment
    v := 10
    fmt.Println("v:", v)

    v += 5
    fmt.Println("v += 5:", v)

    v -= 3
    fmt.Println("v -= 3:", v)

    v *= 2
    fmt.Println("v *= 2:", v)

    v /= 4
    fmt.Println("v /= 4:", v)

    v %= 3
    fmt.Println("v %= 3:", v)

    // multiple assignment and swap
    aa, bb := 1, 2
    aa, bb = bb, aa
    fmt.Println("swap aa,bb:", aa, bb)

    // underscore to ignore value
    _, c := 0, 5
    fmt.Println("underscore ignored, c:", c)

    // var vs short declaration
    var d int = 7
    e := 8
    fmt.Println("d, e:", d, e)

    // Comparison operator examples
    fmt.Println("a == b:", a == b)
    fmt.Println("a != b:", a != b)
    fmt.Println("a < b:", a < b)
    fmt.Println("a <= b:", a <= b)
    fmt.Println("a > b:", a > b)
    fmt.Println("a >= b:", a >= b)

    fmt.Println("x > y:", x > y)

    s1, s2, s3 := "go", "go", "golang"
    fmt.Println("s1 == s2:", s1 == s2)
    fmt.Println("s1 < s3:", s1 < s3)
}
`,
  output: 'a + b = 10\na - b = 4\na * b = 21\na / b = 2\na % b = 1\nx / y = 2.3333333333333335\nmixed: 2.3333333333333335\npower: 8\ni after i++ 2\nj after j-- 1\nprecedence: 7\nv: 10\nv += 5: 15\nv -= 3: 12\nv *= 2: 24\nv /= 4: 6\nv %= 3: 0\nswap aa,bb: 2 1\nunderscore ignored, c: 5\nd, e: 7 8\na == b: false\na != b: true\na < b: false\na <= b: false\na > b: true\na >= b: true\nx > y: true\ns1 == s2: true\ns1 < s3: true\n'
});

