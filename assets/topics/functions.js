window.topics = window.topics || [];
window.topics.push({
  id: 'functions',
  title: 'Functions',
  desc: 'Mendefinisikan dan memanggil fungsi: named, anonymous, variadic, function-as-value, function-as-parameter, dan rekursi.',
  code: `package main

import "fmt"

// Named function with parameters and return
func tambah(a int, b int) int {
    return a + b
}

// Variadic function
func sumAll(nums ...int) int {
    s := 0
    for _, n := range nums {
        s += n
    }
    return s
}

// Function as value
var mul = func(a, b int) int {
    return a * b
}

// Function as parameter
func apply(op func(int, int) int, a, b int) int {
    return op(a, b)
}

// Recursive examples
func fact(n int) int {
    if n <= 1 {
        return 1
    }
    return n * fact(n-1)
}

func fib(n int) int {
    if n <= 1 {
        return n
    }
    return fib(n-1) + fib(n-2)
}

func main() {
    // Named function
    fmt.Println("5 + 3 =", tambah(5, 3))

    // Anonymous function assigned to variable
    greet := func(name string) {
        fmt.Println("Hello", name)
    }
    
    greet("Go")

    // Immediately-invoked anonymous function
    func() {
        fmt.Println("anon immediate")
    }()

    // Variadic function
    fmt.Println("sumAll(1 ,2, 3) =", sumAll(1, 2, 3))

    // Function as value
    fmt.Println("mul(3, 4) =", mul(3, 4))

    // Function as parameter
    fmt.Println("apply tambah:", apply(tambah, 2, 3))
    fmt.Println("apply mul:", apply(mul, 2, 3))

    // Recursive examples
    fmt.Println("fact(5) =", fact(5))
    fmt.Println("fib(6)  =", fib(6))
}
`,
  output: '5 + 3 = 8\nHello Go\nanon immediate\nsumAll(1 ,2, 3) = 6\nmul(3, 4) = 12\napply tambah: 5\napply mul: 6\nfact(5) = 120\nfib(6)  = 8\n'
});

