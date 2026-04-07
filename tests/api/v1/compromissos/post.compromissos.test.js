import fetch from 'node-fetch'
import db from 'infra/database.js'

test('POST para /api/v1/compromissos deve criar um compromisso', async () => {
  const response = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      titulo: 'Consulta médica',
      data: '2026-10-15',
      descricao: 'Levar exames de sangue',
    }),
  })

  expect(response.status).toBe(201)
})

afterAll(() => {
  const stmt = db.prepare(
    "DELETE FROM compromissos WHERE titulo = 'Consulta médica'",
  )
  stmt.run()
})
