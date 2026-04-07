import db from '../infra/database'

test('Banco de dados deve estar conectado e executando queries', () => {
  const result = db.prepare('SELECT 2 + 2 AS soma').get()

  expect(result.soma).toBe(4)
})

test('A tabela "compromissos" deve ter sido criada', () => {
  const table = db
    .prepare(
      `
    SELECT name FROM sqlite_master WHERE type='table' AND name='compromissos'
  `,
    )
    .get()

  expect(table).not.toBeUndefined()
  expect(table.name).toBe('compromissos')
})
