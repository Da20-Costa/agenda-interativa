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
      data: 'Quinta',
      descricao: 'Levar exames de sangue',
    }),
  })

  expect(response.status).toBe(201)
})

test('POST para /api/v1/compromissos deve retornar erro 400 se o título tiver mais de 100 caracteres', async () => {
  const tituloGigante = 'A'.repeat(101)

  const response = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo: tituloGigante,
      data: 'Quinta',
      descricao: 'Teste de limite de caracteres',
    }),
  })

  const responseBody = await response.json()

  expect(response.status).toBe(400)
  expect(responseBody.erro).toBe(
    'O título é obrigatório e deve ter no máximo 100 caracteres.',
  )
})

test('POST para /api/v1/compromissos deve retornar erro 400 se a data for inválida', async () => {
  const response = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo: 'Reunião de Teste',
      data: 'dataInvalida',
      descricao: 'Teste de validação de data',
    }),
  })

  const responseBody = await response.json()

  expect(response.status).toBe(400)
  expect(responseBody.erro).toBe(
    'Data inválida. Use um dia da semana válido (ex: Segunda, Terça...).',
  )
})

afterAll(() => {
  const stmt = db.prepare(
    "DELETE FROM compromissos WHERE titulo = 'Consulta médica'",
  )
  stmt.run()
})
