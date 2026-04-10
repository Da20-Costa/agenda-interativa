import fetch from 'node-fetch'
import db from 'infra/database.js'

test('PUT /api/v1/compromissos deve atualizar um compromisso com sucesso', async () => {
  await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo: 'Título Antigo',
      data: 'Segunda',
      descricao: 'Descrição Antiga',
    }),
  })

  const responseLista = await fetch('http://localhost:3000/api/v1/compromissos')
  const compromissos = await responseLista.json()
  const compromissoCriado = compromissos.find(
    (c) => c.titulo === 'Título Antigo',
  )

  const dadosAtualizados = {
    id: compromissoCriado.id,
    titulo: 'Título Atualizado',
    data: 'Terça',
    descricao: 'Descrição Nova',
  }

  const responsePut = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosAtualizados),
  })

  expect(responsePut.status).toBe(200)

  const responseListaAtualizada = await fetch(
    'http://localhost:3000/api/v1/compromissos',
  )
  const compromissosAtualizados = await responseListaAtualizada.json()
  const compromissoEditado = compromissosAtualizados.find(
    (c) => c.id === compromissoCriado.id,
  )

  expect(compromissoEditado.titulo).toBe('Título Atualizado')
  expect(compromissoEditado.data).toBe('Terça')
  expect(compromissoEditado.descricao).toBe('Descrição Nova')
})

test('PUT /api/v1/compromissos deve retornar 400 se faltarem dados obrigatórios', async () => {
  const dadosIncompletos = {
    id: 1,
    data: 'Quarta',
  }

  const responsePut = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosIncompletos),
  })

  expect(responsePut.status).toBe(400)
})

afterAll(() => {
  const stmt = db.prepare(
    "DELETE FROM compromissos WHERE titulo = 'Título Atualizado'",
  )
  stmt.run()
})
