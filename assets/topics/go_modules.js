window.topics = window.topics || [];
window.topics.push({
  id: 'go_modules',
  title: 'Go Modules',
  desc: 'Module-aware builds: go.mod/go.sum, initializing modules, `go get`, `go mod tidy`, semantic import versioning, and replace directives.',
  code: `package main

import (
    "fmt"
    "runtime/debug"
)

func main() {
    if info, ok := debug.ReadBuildInfo(); ok && info != nil {
        fmt.Println("Module Path:", info.Main.Path)
        fmt.Println("Go Version:", info.GoVersion)
        if len(info.Deps) > 0 {
            fmt.Println("Dependencies:")
            for _, d := range info.Deps {
                fmt.Printf(" - %s %s\n", d.Path, d.Version)
            }
        } else {
            fmt.Println("No recorded dependencies (module may be root-only or built without module info).")
        }
    } else {
        fmt.Println("No module info available (built without module support or debug info).")
    }
}
`,
  output: "Module Path: example.com/mymodule\nGo Version: go1.20\nDependencies:\n - github.com/some/dependency v1.2.3\n"
});

