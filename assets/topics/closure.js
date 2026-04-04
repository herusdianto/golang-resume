window.topics = window.topics || [];
window.topics.push({
  id: 'closure',
  title: 'Closure',
  desc: 'Examples of closures: capturing outer variables, closures with internal state, and closure factories.',
  code: `package main

import "fmt"

func main() {
    // Closure that captures outer variable
    x := 10
    add := func(y int) int {
        return x + y
    }
    fmt.Println("add(5):", add(5))

    // Closure that keeps internal state (counter)
    inc := func() func() int {
        counter := 0
        return func() int {
            counter++
            return counter
        }
    }()
    fmt.Println("inc():", inc())
    fmt.Println("inc():", inc())

    // Closure factory: creates multiplier functions
    mulBy := func(factor int) func(int) int {
        return func(n int) int { return n * factor }
    }
    double := mulBy(2)
    fmt.Println("double(4):", double(4))
}
`,
  output: 'add(5): 15\ninc(): 1\ninc(): 2\ndouble(4): 8\n'
});
