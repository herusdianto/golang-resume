window.topics = window.topics || [];
window.topics.push({
  id: 'file_io',
  title: 'File I/O & OS',
  desc: 'Create, read, write, copy, move, and delete files using the standard library: os, io, bufio, and io/fs; permission bits and error handling.',
  code: `package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
)

// WriteFileSimple writes data to a file (creates or truncates).
func WriteFileSimple(path string, data []byte) error {
    // Since Go 1.16 you can use os.WriteFile; this example shows buffered writer.
    f, err := os.Create(path)
    if err != nil {
        return err
    }
    defer f.Close()

    w := bufio.NewWriter(f)
    if _, err := w.Write(data); err != nil {
        return err
    }
    return w.Flush()
}

// ReadFileSimple reads entire file into memory using os.ReadFile (since Go 1.16).
func ReadFileSimple(path string) ([]byte, error) {
    return os.ReadFile(path)
}

// CopyFile copies src -> dst. It preserves basic content; permission preserving is optional here.
func CopyFile(src, dst string) error {
    in, err := os.Open(src)
    if err != nil {
        return err
    }
    defer in.Close()

    out, err := os.Create(dst)
    if err != nil {
        return err
    }
    defer func() {
        // ensure file closed and remove on error
        if cerr := out.Close(); err == nil {
            err = cerr
        }
    }()

    if _, err := io.Copy(out, in); err != nil {
        return err
    }
    // Optionally sync to storage
    return out.Sync()
}

// MoveFile uses os.Rename when possible.
func MoveFile(src, dst string) error {
    return os.Rename(src, dst)
}

// RemoveFile deletes a file.
func RemoveFile(path string) error {
    return os.Remove(path)
}

func main() {
    p := "example.txt"
    data := []byte("Hello from Go file I/O!\n")

    // write
    if err := WriteFileSimple(p, data); err != nil {
        fmt.Println("write error:", err)
        return
    }
    fmt.Println("written:", p)

    // read
    if b, err := ReadFileSimple(p); err == nil {
        fmt.Printf("read %d bytes: %s", len(b), string(b))
    } else {
        fmt.Println("read error:", err)
    }

    // copy
    copyPath := "example.copy.txt"
    if err := CopyFile(p, copyPath); err != nil {
        fmt.Println("copy error:", err)
    } else {
        fmt.Println("copied to:", copyPath)
    }

    // move
    moved := "example.moved.txt"
    if err := MoveFile(copyPath, moved); err != nil {
        fmt.Println("move error:", err)
    } else {
        fmt.Println("moved to:", moved)
    }

    // remove
    if err := RemoveFile(p); err != nil {
        fmt.Println("remove error:", err)
    } else {
        fmt.Println("removed:", p)
    }
}
`,
  output: "written: example.txt\nread 24 bytes: Hello from Go file I/O!\ncopied to: example.copy.txt\nmoved to: example.moved.txt\nremoved: example.txt\n"
});

