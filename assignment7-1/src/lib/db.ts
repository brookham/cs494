import Database from "better-sqlite3";

const db = new Database("blog.db", { verbose: console.log });

db.prepare(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )
`).run();

export default db;
