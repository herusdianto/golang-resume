window.topics = window.topics || [];
window.topics.push({
  id: 'interface',
  title: 'Interfaces',
  desc: 'Interfaces define behavior by method sets. Examples: implementation by structs, type assertions and type switches, empty interface usage.',
  code: `package main

import (
    "fmt"
)

// Define an interface
type Greeter interface {
    Greet() string
}

// Implement the interface with a struct
type Person struct {
    Name string
}

func (p Person) Greet() string {
    return "Hello, " + p.Name
}

// Another implementation
type Robot struct{
    ID int
}

func (r Robot) Greet() string {
    return fmt.Sprintf("Beep boop, I am robot #%d", r.ID)
}

func say(g Greeter) {
    fmt.Println(g.Greet())
}

func main() {
    p := Person{Name: "Alice"}
    r := Robot{ID: 42}

    // Both implement Greeter
    say(p)
    say(r)

    // Interface value can hold any type that implements the interface
    var g Greeter = p
    fmt.Printf("g type: %T", g)

    // Type assertion (concrete type)
    if pp, ok := g.(Person); ok {
        fmt.Println("Name from asserted Person:", pp.Name)
    }

    // Empty interface can hold any value
    var any interface{}
    any = 123
    fmt.Printf("any: %v (type %T)", any, any)

    any = "a string"
    fmt.Printf("any: %v (type %T)", any, any)

    // Type switch on interface
    switch v := any.(type) {
    case string:
        fmt.Println("string value:", v)
    case int:
        fmt.Println("int value:", v)
    default:
        fmt.Println("unknown type")
    }
}
`,
  output: "Hello, Alice\nBeep boop, I am robot #42\ng type: main.Person\nName from asserted Person: Alice\nany: 123 (type int)\nany: a string (type string)\nstring value: a string\n"
});

