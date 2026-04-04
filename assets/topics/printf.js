window.topics = window.topics || [];
window.topics.push({
  id: 'printf',
  title: 'Printf',
  desc: 'Printf examples using format verbs and width/precision options. See the reference for details.',
  code: `package main

import "fmt"

func main() {
    name := "Ana"
    age := 29
    pi := 3.14159

    fmt.Printf("Name: %s, Age: %d", name, age)
    fmt.Printf("Pi approx: %.2f", pi)
    fmt.Printf("Value: %v (type: %T)", pi, pi)
    fmt.Printf("Hex: %#x", 255)

    // Width / padding examples
    fmt.Printf("Padded: %6d", 42)
    fmt.Printf("Left: %-10s|", "hi")
    fmt.Printf("Zero padded: %06d", 42)
    fmt.Printf("Width/prec: %8.3f", 3.14159)
}`,
  output: 'Name: Ana, Age: 29\nPi approx: 3.14\nValue: 3.14159 (type: float64)\nHex: 0xff\nPadded:    42\nLeft: hi        |\nZero padded: 000042\nWidth/prec:    3.142\n'
});
