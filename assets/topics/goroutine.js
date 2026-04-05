window.topics = window.topics || [];
window.topics.push({
  id: 'goroutine',
  title: 'Goroutines & Channels',
  desc: 'Concurrency basics: launching goroutines with `go`, communicating via channels (buffered/unbuffered), `select`, and simple synchronization with `sync.WaitGroup`.',
  code: `package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Println("worker", id, "done")
}

func main() {
    // 1) simple goroutine
    go func() {
        fmt.Println("hello from goroutine")
    }()

    // Give the goroutine a moment to run (only for demo)
    time.Sleep(10 * time.Millisecond)

    // 2) unbuffered channel communication
    ch := make(chan int)
    go func() { ch <- 42 }()
    v := <-ch
    fmt.Println("received:", v)

    // 3) buffered channel
    buf := make(chan int, 2)
    buf <- 1
    buf <- 2
    fmt.Println("buffered:", <-buf, <-buf)

    // 4) simple select (timeout example)
    timeout := time.After(5 * time.Millisecond)
    select {
    case <-timeout:
        fmt.Println("select: timed out")
    default:
        fmt.Println("select: default (no timeout yet)")
    }

    // 5) WaitGroup for synchronization
    var wg sync.WaitGroup
    wg.Add(1)
    go worker(1, &wg)
    wg.Wait()
}
`,
  output: "hello from goroutine\nreceived: 42\nbuffered: 1 2\nselect: default (no timeout yet)\nworker 1 done\n"
});

