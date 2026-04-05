window.topics = window.topics || [];
window.topics.push({
  id: 'logging',
  title: 'Logging',
  desc: 'Logging with the standard `log` package: flags, prefixes, custom loggers, basic structured logging patterns, and notes about third-party loggers (logrus, zerolog). Also include request-scoped logging tips (request-id) and performance notes.',
  code: `package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net"
    "net/http"
    "os"
    "strings"
    "time"
)

// Simple structured log helper using the standard log package
func logJSON(v interface{}) {
    b, _ := json.Marshal(v)
    log.Println(string(b))
}

// getClientIP tries to resolve the real client IP from headers or RemoteAddr
func getClientIP(r *http.Request) string {
    // Prefer X-Forwarded-For when present (may contain comma-separated list)
    if xf := r.Header.Get("X-Forwarded-For"); xf != "" {
        // take the first entry
        parts := strings.Split(xf, ",")
        return strings.TrimSpace(parts[0])
    }
    // Fallback to X-Real-IP
    if xr := r.Header.Get("X-Real-Ip"); xr != "" {
        return strings.TrimSpace(xr)
    }
    // Finally, parse RemoteAddr which may include port
    host, _, err := net.SplitHostPort(r.RemoteAddr)
    if err != nil {
        return r.RemoteAddr
    }
    return host
}

func handler(w http.ResponseWriter, r *http.Request) {
    // example: include a request-id if provided in header
    reqID := r.Header.Get("X-Request-ID")
    if reqID == "" {
        reqID = "-"
    }

    ip := getClientIP(r)

    // structured-ish message
    logJSON(map[string]interface{}{
        "ts":        time.Now().Format(time.RFC3339Nano),
        "level":     "info",
        "msg":       "handling request",
        "method":    r.Method,
        "path":      r.URL.Path,
        "requestId": reqID,
        "ip":        ip,
    })

    fmt.Fprintln(w, "ok")
}

func main() {
    // configure the default logger
    log.SetFlags(0) // disable default time/prefix formatting (we'll add our own)
    log.SetOutput(os.Stdout)

    // custom logger example
    logger := log.New(os.Stderr, "myapp: ", log.LstdFlags|log.Lshortfile)
    logger.Println("starting server")

    mux := http.NewServeMux()
    mux.HandleFunc("/", handler)

    srv := &http.Server{Addr: ":8080", Handler: mux}

    // run server (for demo; in production handle graceful shutdown)
    logger.Println("listening on :8080")
    if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
        logger.Fatalf("server error: %v", err)
    }
}
`,
  output: "{\"ts\":\"2026-04-05T00:00:00Z\",\"level\":\"info\",\"msg\":\"handling request\",\"method\":\"GET\",\"path\":\"/\",\"requestId\":\"-\",\"ip\":\"\"}\nmyapp: 2026/04/05 00:00:00 main.go:41: starting server\nmyapp: 2026/04/05 00:00:00 main.go:44: listening on :8080\n"
});
