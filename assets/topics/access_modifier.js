window.topics = window.topics || [];
window.topics.push({
  id: 'access_modifier',
  title: 'Access Modifier',
  desc: 'Exported vs unexported identifiers in Go: capitalization rule, package visibility, and practical effects such as JSON marshaling.',
  code: `package main

import (
    "encoding/json"
    "fmt"
)

// Exported vs unexported types and fields:
// - Identifiers that start with a capital letter are exported (visible outside the package).
// - Identifiers that start with a lowercase letter are unexported (package-private).

// exported type with exported and unexported fields
type Person struct {
    Name string // exported -> visible to other packages and reflect-based packages
    age  int    // unexported -> private to the package
}

// unexported type (lowercase), but fields still follow the same rule
type person struct {
    Name string
    age  int
}

func main() {
    // JSON marshaling only includes exported fields
    p := Person{Name: "Ana", age: 30}
    b, _ := json.Marshal(p)
    fmt.Println("Person JSON:", string(b)) // age is omitted because it's unexported

    // unexported type but exported field still marshals when in same package
    p2 := person{Name: "Bob", age: 25}
    b2, _ := json.Marshal(p2)
    fmt.Println("person (unexported type) JSON:", string(b2))

    // exported vs unexported identifiers used as package-level examples
    // (can't demonstrate cross-package usage in a single-file snippet here)
    fmt.Println("Export rule: Capitalized identifier = exported (public) ; lowercase = unexported (package-private)")
}
`,
  output: "Person JSON: {\"Name\":\"Ana\"}\nperson (unexported type) JSON: {\"Name\":\"Bob\"}\nExport rule: Capitalized identifier = exported (public) ; lowercase = unexported (package-private)\n"
});

