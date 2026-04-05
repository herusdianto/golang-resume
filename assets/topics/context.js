window.topics = window.topics || [];
window.topics.push({
  id: 'context',
  title: 'Context',
  desc: 'The `context` package: cancellation, timeouts/deadlines, passing request-scoped values, and best-practices for goroutines and API boundaries.',
  code: `package main

import (
    "context"
    "fmt"
    "time"
)

// worker listens to ctx.Done() and returns when canceled
func worker(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("worker", id, "stopped:", ctx.Err())
            return
        default:
            fmt.Println("worker", id, "doing work")
            time.Sleep(30 * time.Millisecond)
        }
    }
}

func main() {
    // 1) WithCancel example
    ctx, cancel := context.WithCancel(context.Background())
    go worker(ctx, 1)

    time.Sleep(80 * time.Millisecond)
    cancel() // cancel the worker

    // give worker time to observe cancellation
    time.Sleep(40 * time.Millisecond)

    // 2) WithTimeout example
    ctx2, cancel2 := context.WithTimeout(context.Background(), 100*time.Millisecond)
    defer cancel2()

    go worker(ctx2, 2)
    time.Sleep(200 * time.Millisecond) // exceed timeout

    // 3) WithValue example (use sparingly; prefer explicit parameters)
    ctx3 := context.WithValue(context.Background(), "request-id", "req-123")
    if v := ctx3.Value("request-id"); v != nil {
        fmt.Println("request-id:", v)
    }

    fmt.Println("main done")
}
`,
  output: "worker 1 doing work\nworker 1 doing work\nworker 1 doing work\nworker 1 stopped: context.Canceled\nworker 2 doing work\nworker 2 stopped: context.DeadlineExceeded\nrequest-id: req-123\nmain done\n"
});

