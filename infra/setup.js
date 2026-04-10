const Database = require('better-sqlite3')
const path = require('path')

console.log('⏳ Iniciando a configuração do Banco de Dados...')

const dbPath = path.resolve(process.cwd(), 'agenda.db')
const db = new Database(dbPath)

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS compromissos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    data TEXT NOT NULL,
    descricao TEXT
  )
`,
).run()

console.log('✅ Banco de dados pronto para uso!')
