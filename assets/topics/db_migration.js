window.topics = window.topics || [];
window.topics.push({
  id: 'db_migration',
  title: 'DB Migration',
  desc: 'Schema migrations: auto-apply migrations on startup (golang-migrate) and library-driven auto-migration (GORM AutoMigrate).',
  code: `-- Approach 1: Programmatic auto-apply using golang-migrate (SQL files)
-- Keep your migrations in a directory (./migrations) as up/down SQL pairs.
-- On application startup you can auto-apply any pending migrations:

package main

import (
    "fmt"
    _ "github.com/golang-migrate/migrate/v4/database/postgres"
    "github.com/golang-migrate/migrate/v4"
    _ "github.com/golang-migrate/migrate/v4/source/file"
)

func autoMigrateWithMigrate() error {
    // migrations located in ./migrations (use a file:// URL when running programmatically)
    m, err := migrate.New("file://migrations", "postgres://user:pass@localhost:5432/dbname?sslmode=disable")
    if err != nil {
        return fmt.Errorf("migration init: %w", err)
    }
    // Up applies any pending "up" migrations. This makes startup perform auto-migrate behavior.
    if err := m.Up(); err != nil && err != migrate.ErrNoChange {
        return fmt.Errorf("migration up: %w", err)
    }
    return nil
}

// Call autoMigrateWithMigrate() early in your main() before serving traffic.


-- Approach 2: Library-driven AutoMigrate (GORM)
-- If you prefer an ORM-style auto-migration, GORM offers AutoMigrate which creates/updates tables to match Go structs.
-- Note: AutoMigrate is convenient but not a substitute for careful schema management in production.

package main

import (
    "fmt"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

// Example model(s)
type User struct {
    ID    uint   \`gorm:"primaryKey"\`
    Name  string
    Email string \`gorm:"uniqueIndex"\`
}

func autoMigrateWithGORM() error {
    dsn := "host=localhost user=user password=pass dbname=dbname port=5432 sslmode=disable"
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        return fmt.Errorf("gorm open: %w", err)
    }
    // AutoMigrate will create tables, missing columns and indexes. It will not drop unused columns by default.
    if err := db.AutoMigrate(&User{}); err != nil {
        return fmt.Errorf("gorm automigrate: %w", err)
    }
    return nil
}

// Suggested pattern: pick one approach and run it at startup (in init or main) after verifying configuration.
`,
  output: "Approach 1: call migrate.New(...) then m.Up() during startup; Approach 2: call gorm.Open(...) then db.AutoMigrate(...) -- both will apply schema changes programmatically.",
});
