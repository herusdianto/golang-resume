window.topics = window.topics || [];
window.topics.push({
  id: 'http_router',
  title: 'HTTP Router',
  desc: 'Routing with the standard `net/http` (ServeMux & Handler) and common patterns: handler funcs, middleware, URL params and brief mention of third-party routers.',
  code: `package main

import (
    "fmt"
    "log"
    "net/http"
    "time"
)

// simple middleware to log requests
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start))
    })
}

// hello handler as a function
func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello, world!")
}

// greet handler using path parameter manual parsing (simple example)
func greetHandler(w http.ResponseWriter, r *http.Request) {
    // naive path parsing: /greet/{name}
    name := r.URL.Path[len("/greet/"):]
    if name == "" {
        http.Error(w, "name missing", http.StatusBadRequest)
        return
    }
    fmt.Fprintf(w, "Hello, %s!", name)
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/", helloHandler)
    mux.HandleFunc("/greet/", greetHandler) // note trailing slash

    // wrap mux with middleware
    handler := loggingMiddleware(mux)

    log.Println("listening on :8080")
    if err := http.ListenAndServe(":8080", handler); err != nil {
        log.Fatal(err)
    }
}

/*
Notes / third-party routers:
- For richer routing (path params, middleware chaining, groups), popular routers include:
  - github.com/gorilla/mux
  - github.com/go-chi/chi
- Example middleware patterns and route parameters are easier with those routers, but stdlib is sufficient for many cases.
- Always propagate request context (r.Context()) for cancellation/timeouts and prefer context values for request-scoped data.
*/
`,
  output: "# To try locally:\n# 1) go run main.go\n# 2) curl http://localhost:8080/\n# 3) curl http://localhost:8080/greet/Ana\n# Logs will show request method/path and duration."
});

