window.topics = window.topics || [];
window.topics.push({
  id: 'restful_api',
  title: 'RESTful API',
  desc: 'Building JSON-based REST APIs with the standard library: handlers, request decoding, response encoding, status codes, routing patterns, and graceful shutdown.',
  code: `package main

import (
    "context"
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "os"
    "os/signal"
    "strconv"
    "sync"
    "syscall"
    "time"
)

// Item represents a simple resource
type Item struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

var (
    mu    sync.Mutex
    items = map[int]Item{}
    next  = 1
)

func writeJSON(w http.ResponseWriter, code int, v interface{}) {
    w.Header().Set("Content-Type", "application/json; charset=utf-8")
    w.WriteHeader(code)
    json.NewEncoder(w).Encode(v)
}

func listItems(w http.ResponseWriter, r *http.Request) {
    mu.Lock()
    defer mu.Unlock()
    coll := make([]Item, 0, len(items))
    for _, it := range items {
        coll = append(coll, it)
    }
    writeJSON(w, http.StatusOK, coll)
}

func createItem(w http.ResponseWriter, r *http.Request) {
    var in struct{ Name string \`json:"name"\` }
    if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }
    mu.Lock()
    id := next
    next++
    it := Item{ID: id, Name: in.Name}
    items[id] = it
    mu.Unlock()
    writeJSON(w, http.StatusCreated, it)
}

func getItem(w http.ResponseWriter, r *http.Request) {
    // naive path parsing: /items/{id}
    idStr := r.URL.Path[len("/items/"):]
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }
    mu.Lock()
    it, ok := items[id]
    mu.Unlock()
    if !ok {
        http.Error(w, "not found", http.StatusNotFound)
        return
    }
    writeJSON(w, http.StatusOK, it)
}

func deleteItem(w http.ResponseWriter, r *http.Request) {
    idStr := r.URL.Path[len("/items/"):]
    id, err := strconv.Atoi(idStr)
    if err != nil {
        http.Error(w, "invalid id", http.StatusBadRequest)
        return
    }
    mu.Lock()
    defer mu.Unlock()
    if _, ok := items[id]; !ok {
        http.Error(w, "not found", http.StatusNotFound)
        return
    }
    delete(items, id)
    w.WriteHeader(http.StatusNoContent)
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/items", func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case http.MethodGet:
            listItems(w, r)
        case http.MethodPost:
            createItem(w, r)
        default:
            w.Header().Set("Allow", "GET, POST")
            http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
        }
    })
    mux.HandleFunc("/items/", func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case http.MethodGet:
            getItem(w, r)
        case http.MethodDelete:
            deleteItem(w, r)
        default:
            w.Header().Set("Allow", "GET, DELETE")
            http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
        }
    })

    srv := &http.Server{Addr: ":8080", Handler: mux}

    // Graceful shutdown
    go func() {
        quit := make(chan os.Signal, 1)
        signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
        <-quit
        ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
        defer cancel()
        log.Println("shutting down server...")
        if err := srv.Shutdown(ctx); err != nil {
            log.Println("shutdown error:", err)
        }
    }()

    log.Println("listening on :8080")
    if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
        log.Fatal(err)
    }
    log.Println("server stopped")
}
`,
  output: "# Try locally:\n# 1) go run main.go\n# 2) curl -sS http://localhost:8080/items | jq\n# 3) curl -sS -X POST -d '{\"name\":\"Ana\"}' -H 'Content-Type: application/json' http://localhost:8080/items | jq\n# 4) curl http://localhost:8080/items/1 | jq\n# 5) curl -X DELETE http://localhost:8080/items/1\n"
});

