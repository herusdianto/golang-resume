window.topics = window.topics || [];
window.topics.push({
  id: 'pointer',
  title: 'Pointers',
  desc: 'Pointer basics: address (&), dereference (*), nil pointers, pointers to structs, and pointer vs value receiver behavior.',
  code: `package main

import "fmt"

type Point struct {
    X, Y int
}

func (p Point) Move(dx, dy int) {
    // value receiver: operates on a copy
    p.X += dx
    p.Y += dy
}

func (p *Point) MovePtr(dx, dy int) {
    // pointer receiver: modifies the original
    p.X += dx
    p.Y += dy
}

func main() {
    // basic pointer usage
    x := 10
    px := &x
    fmt.Println("x:", x, "px:", *px)
    *px = 20
    fmt.Println("x after *px=20:", x)

    // nil pointer
    var p *int
    fmt.Println("nil pointer p == nil:", p == nil)

    // structs and receivers
    pt := Point{1, 2}
    pt.Move(1, 1)
    fmt.Println("after Move (value receiver):", pt)
    pt.MovePtr(1, 1)
    fmt.Println("after MovePtr (pointer receiver):", pt)

    p2 := &Point{5, 5}
    p2.Move(1, 1)      // value receiver called on pointer -> does not modify original
    fmt.Println("p2 after Move (value) called on pointer:", p2)
    p2.MovePtr(1, 1)   // pointer receiver modifies original
    fmt.Println("p2 after MovePtr (pointer) called on pointer:", p2)
}
`,
  output: "x: 10 px: 10\nx after *px=20: 20\nnil pointer p == nil: true\nafter Move (value receiver): {1 2}\nafter MovePtr (pointer receiver): {2 3}\np2 after Move (value) called on pointer: &{5 5}\np2 after MovePtr (pointer) called on pointer: &{6 6}\n"
});

