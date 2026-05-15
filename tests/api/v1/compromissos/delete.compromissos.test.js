/**
 * @jest-environment node
 */

import fetch from 'node-fetch'
import sql from 'infra/database.js'

test('DELETE para /api/v1/compromissos deve remover o compromisso pelo ID', async () => {
  const [novoCompromisso] = await sql`
    INSERT INTO compromissos (titulo, data, descricao)
    VALUES ('Teste Delete', 'Sexta', 'Será apagado')
    RETURNING id
  `
  const idParaDeletar = novoCompromisso.id

  const response = await fetch(
    `http://localhost:3000/api/v1/compromissos?id=${idParaDeletar}`,
    {
      method: 'DELETE',
    },
  )

  expect(response.status).toBe(204)

  const resultados = await sql`
    SELECT * FROM compromissos WHERE id = ${idParaDeletar}
  `

  expect(resultados.length).toBe(0)
})

afterAll(async () => {
  try {
    await sql`DELETE FROM compromissos WHERE titulo = 'Teste Delete'`
  } finally {
    await sql.end()
  }
})
