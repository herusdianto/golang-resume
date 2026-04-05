window.topics = window.topics || [];
window.topics.push({
  id: 'nil',
  title: 'Nil',
  desc: 'Nil values and zero values: behavior for slices, maps, pointers, channels, funcs, and interfaces; common pitfalls.',
  code: `package main

import "fmt"

func main() {
    // Nil slice vs empty slice
    var s []int
    fmt.Println("nil slice:", s == nil, "len:", len(s), "cap:", cap(s))
    s = append(s, 1)
    fmt.Println("after append:", s, "len:", len(s))

    e := make([]int, 0)
    fmt.Println("empty slice (make):", e == nil, "len:", len(e))

    // Nil map: reading is safe, writing panics
    var m map[string]int
    fmt.Println("nil map:", m == nil)
    fmt.Println("read from nil map (zero):", m["x"])

    if m == nil {
        fmt.Println("cannot write to nil map; initialize with make first")
        m = make(map[string]int)
    }
    m["x"] = 10
    fmt.Println("after init m['x']:", m["x"])

    // Nil pointer
    var p *int
    fmt.Println("nil pointer:", p == nil)
    // Dereferencing p here would panic, so avoid.

    // Nil channel: send/receive would block; safe to compare
    var ch chan int
    fmt.Println("nil channel:", ch == nil)
    select {
    case v := <-ch:
        fmt.Println("received", v)
    default:
        fmt.Println("receive on nil channel would block; default taken")
    }

    // Nil function
    var f func()
    fmt.Println("nil func:", f == nil)

    // Nil interface gotcha: interface value that holds a typed nil pointer is not == nil
    var i interface{}
    fmt.Println("nil interface:", i == nil)

    var ip *int = nil
    i = ip
    fmt.Println("interface holding (*int)(nil) == nil?", i == nil)
    fmt.Printf("interface value: %v, type: %T\n", i, i)
}
`,
  output: "nil slice: true len: 0 cap: 0\nafter append: [1] len: 1\nempty slice (make): false len: 0\nnil map: true\nread from nil map (zero): 0\ncannot write to nil map; initialize with make first\nafter init m['x']: 10\nnil pointer: true\nnil channel: true\nreceive on nil channel would block; default taken\nnil func: true\nnil interface: true\ninterface holding (*int)(nil) == nil? false\ninterface value: <nil>, type: *int\n"
});

