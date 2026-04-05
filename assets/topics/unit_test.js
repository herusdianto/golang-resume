window.topics = window.topics || [];
window.topics.push({
  id: 'unit_test',
  title: 'Unit Testing',
  desc: 'Introduction to Go testing: the `testing` package, table-driven tests, subtests, `TestMain`, benchmarks, and common `go test` commands.',
  code: `// file: calc.go
package calc

// Add returns the sum of a and b.
func Add(a, b int) int {
    return a + b
}

// file: calc_test.go
package calc

import (
    "fmt"
    "testing"
)

// table-driven test with subtests
func TestAdd(t *testing.T) {
    cases := []struct{
        name string
        a, b int
        want int
    }{
        {"both positive", 2, 3, 5},
        {"zero", 0, 5, 5},
        {"negatives", -1, -2, -3},
    }

    for _, c := range cases {
        c := c // capture
        t.Run(c.name, func(t *testing.T) {
            got := Add(c.a, c.b)
            if got != c.want {
                t.Fatalf("Add(%d, %d) = %d; want %d", c.a, c.b, got, c.want)
            }
        })
    }
}

// Example of TestMain for setup/teardown
func TestMain(m *testing.M) {
    // setup code here
    fmt.Println("TestMain: setup")

    // run tests
    m.Run()

    // teardown code here
    fmt.Println("TestMain: teardown")
}

// Benchmark example
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = Add(1, 2)
    }
}
`,
  output: "# To run tests locally:\n#  - go test ./... -v\n#  - go test -run TestAdd -v\n#  - go test -bench=. -benchmem\n# Sample expected lines (approx):\n# TestMain: setup\n# === RUN   TestAdd\n# === RUN   TestAdd/both_positive\n# === RUN   TestAdd/zero\n# === RUN   TestAdd/negatives\n# --- PASS: TestAdd (0.00s)\n# PASS\n# ok   ./calc 0.00s\n"
});

