window.topics = window.topics || [];
window.topics.push({
  id: 'logika',
  title: 'Logical',
  desc: 'Logical operators: && (AND), || (OR), and ! (NOT). Examples include short-circuiting and combinations with comparisons.',
  code: `package main

import "fmt"

func main() {
    a := true
    b := false

    fmt.Println("a:", a)
    fmt.Println("b:", b)

    fmt.Println("a && b:", a && b)
    fmt.Println("a || b:", a || b)
    fmt.Println("!a:", !a)

    // Combining with comparisons
    x := 5
    y := 10
    fmt.Println("x < y && y > 0:", x < y && y > 0)
    fmt.Println("x < y && y > 0:", x < y && y > 0)
    fmt.Println("x == 5 || y == 5:", x == 5 || y == 5)

    // Short-circuit: right side not evaluated when left decides
    fmt.Println("(a && (x/0==0)) safe?:", a && (x > 0))

    // Negation
    fmt.Println("!(x < y):", !(x < y))

    // More complex combination
    fmt.Println("(x < y) && (a || b):", (x < y) && (a || b))
}
`,
  output: 'a: true\nb: false\na && b: false\na || b: true\n!a: false\nx < y && y > 0: true\nx == 5 || y == 5: true\n(a && (x/0==0)) safe?: true\n!(x < y): false\n(x < y) && (a || b): true\n'
});
