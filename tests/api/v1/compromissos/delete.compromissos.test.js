import fetch from 'node-fetch'
import db from 'infra/database.js'

test('DELETE para /api/v1/compromissos deve remover o compromisso pelo ID', async () => {
  const insertStmt = db.prepare(
    "INSERT INTO compromissos (titulo, data, descricao) VALUES ('Teste Delete', 'Sexta', 'Será apagado')",
  )
  const info = insertStmt.run()
  const idParaDeletar = info.lastInsertRowid

  const response = await fetch(
    `http://localhost:3000/api/v1/compromissos?id=${idParaDeletar}`,
    {
      method: 'DELETE',
    },
  )

  expect(response.status).toBe(204)

  const selectStmt = db.prepare('SELECT * FROM compromissos WHERE id = ?')
  const compromissoDeletado = selectStmt.get(idParaDeletar)

  expect(compromissoDeletado).toBeUndefined()
})

afterAll(() => {
  const stmt = db.prepare(
    "DELETE FROM compromissos WHERE titulo = 'Teste Delete'",
  )
  stmt.run()
})
