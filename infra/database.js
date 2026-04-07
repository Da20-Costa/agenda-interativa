import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.resolve(process.cwd(), 'agenda.db')

const db = new Database(dbPath, { verbose: console.log })

db.exec(`
  CREATE TABLE IF NOT EXISTS compromissos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    data TEXT NOT NULL,
    descricao TEXT
  )
`)

export default db
