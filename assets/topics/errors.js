window.topics = window.topics || [];
window.topics.push({
  id: 'interface_errors',
  title: 'Errors',
  desc: 'Examples using the standard library `errors` package: sentinel errors, wrapping with %w, errors.Is, errors.As, errors.Unwrap, and custom error types.',
  code: `package main

import (
    "errors"
    "fmt"
)

// sentinel error
var ErrNotFound = errors.New("not found")

// custom error type
type MyError struct {
    Code int
    Msg  string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("code %d: %s", e.Code, e.Msg)
}

// function that returns different error cases
func readResource(name string) error {
    if name == "" {
        // wrap sentinel
        return fmt.Errorf("readResource: %w", ErrNotFound)
    }
    if name == "bad" {
        // return a typed error
        return &MyError{Code: 400, Msg: "bad request"}
    }
    return nil
}

func main() {
    // 1) sentinel + errors.Is with wrapped error
    if err := readResource(""); err != nil {
        if errors.Is(err, ErrNotFound) {
            fmt.Println("resource missing (Is):", err)
        }
    }

    // 2) typed error + errors.As
    if err := readResource("bad"); err != nil {
        var me *MyError
        if errors.As(err, &me) {
            fmt.Println("got MyError via As:", me.Code, me.Msg)
        }
    }

    // 3) wrapping and unwrapping
    wrapped := fmt.Errorf("operation failed: %w", ErrNotFound)
    fmt.Println("wrapped error:", wrapped)
    if un := errors.Unwrap(wrapped); un != nil {
        fmt.Println("unwrapped:", un)
    }
    if errors.Is(wrapped, ErrNotFound) {
        fmt.Println("errors.Is matches ErrNotFound")
    }
}
`,
  output: "resource missing (Is): readResource: not found\ngot MyError via As: 400 bad request\nwrapped error: operation failed: not found\nunwrapped: not found\nerrors.Is matches ErrNotFound\n"
});
