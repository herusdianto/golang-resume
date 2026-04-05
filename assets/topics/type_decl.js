window.topics = window.topics || [];
window.topics.push({
  id: 'type_decl',
  title: 'Type',
  desc: 'Type aliases vs new types, type conversion, methods on named types, interface usage and type assertions/type switches.',
  code: `package main

import "fmt"

// Type alias (same as underlying type)
type MyIntAlias = int

// New named type (distinct from underlying type)
type MyInt int

func (m MyInt) IsPositive() bool {
    return m > 0
}

// Interface example
type Describer interface {
    Describe() string
}

type Person struct {
    Name string
}

func (p Person) Describe() string {
    return "Person: " + p.Name
}

type Car struct {
    Model string
}

func (c *Car) Describe() string {
    return "Car: " + c.Model
}

func describeValue(d Describer) {
    fmt.Println(d.Describe())
}

func main() {
    // alias vs new type
    var a MyIntAlias = 10
    var b MyInt = 20
    fmt.Printf("a (alias) type: %T, b (new type) type: %T", a, b)

    // conversion required between different named types
    // a = MyInt(b) // conversion
    a = int(b) // convert MyInt to int (MyInt -> int -> alias)
    fmt.Println("a after converting from b:", a)

    // methods on named type
    var x MyInt = 5
    fmt.Println("x.IsPositive():", x.IsPositive())

    // interfaces and type assertion
    var d Describer
    d = Person{Name: "Ana"}
    describeValue(d)

    d = &Car{Model: "T1"}
    describeValue(d)

    // type assertion: extract concrete type
    if p, ok := d.(*Car); ok {
        fmt.Println("asserted to *Car, model:", p.Model)
    }

    // typed nil vs interface nil
    var cp *Car = nil
    var di Describer = cp
    fmt.Println("di == nil?", di == nil)
    fmt.Printf("di value: %v, type: %T", di, di)

    // type switch
    things := []interface{}{Person{Name: "X"}, &Car{Model: "Z"}, 42}
    for _, t := range things {
        switch v := t.(type) {
        case Person:
            fmt.Println("person name:", v.Name)
        case *Car:
            fmt.Println("car model:", v.Model)
        default:
            fmt.Printf("other type: %T", v)
        }
    }
}
`,
  output: "a (alias) type: int, b (new type) type: main.MyInt\na after converting from b: 20\nx.IsPositive(): true\nPerson: Ana\nCar: T1\nasserted to *Car, model: T1\ndi == nil? false\ndi value: <nil>, type: *main.Car\nperson name: X\ncar model: Z\nother type: int\n"
});

