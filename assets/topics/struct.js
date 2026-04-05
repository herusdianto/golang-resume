window.topics = window.topics || [];
window.topics.push({
  id: 'struct',
  title: 'Structs',
  desc: 'Composite types: struct definition, zero value, methods, pointer receivers, and embedding.',
  code: `package main

import "fmt"

// Simple struct
type Person struct {
    Name string
    Age  int
}

// Method with value receiver
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, I'm %s", p.Name)
}

// Method with pointer receiver modifies the receiver
func (p *Person) HaveBirthday() {
    p.Age++
}

// Embedding example
type Employee struct {
    Person
    ID string
}

func main() {
    a := Person{Name: "Alice", Age: 30}
    fmt.Println(a.Greet())
    a.HaveBirthday()
    fmt.Println("Alice age:", a.Age)

    e := Employee{Person: Person{Name: "Bob", Age: 25}, ID: "E123"}
    fmt.Println(e.Greet()) // promoted method via embedding
    e.HaveBirthday()
    fmt.Println("Bob age:", e.Age)
}
`,
  output: "Hi, I'm Alice\nAlice age: 31\nHi, I'm Bob\nBob age: 26\n"
});

