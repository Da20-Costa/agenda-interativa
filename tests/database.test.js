/**
 * @jest-environment node
 */

import sql from 'infra/database.js'

test('Banco de dados deve estar conectado e executando queries', async () => {
  const [result] = await sql`SELECT 2 + 2 AS soma`
  expect(Number(result.soma)).toBe(4)
})

test('A tabela "compromissos" deve ter sido criada', async () => {
  const result = await sql`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_name = 'compromissos'
  `

  expect(result.length).toBeGreaterThan(0)
  expect(result[0].table_name).toBe('compromissos')
})

afterAll(async () => {
  await sql.end()
})
