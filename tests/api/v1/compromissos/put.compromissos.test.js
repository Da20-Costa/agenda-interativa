import fetch from 'node-fetch'

test('PUT /api/v1/compromissos deve atualizar um compromisso com sucesso', async () => {
  // 1. PREPARAÇÃO: Criamos um compromisso de teste
  await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo: 'Título Antigo',
      data: 'Segunda',
      descricao: 'Descrição Antiga',
    }),
  })

  // Buscamos a lista para descobrir qual o ID desse compromisso que acabamos de criar
  const responseLista = await fetch('http://localhost:3000/api/v1/compromissos')
  const compromissos = await responseLista.json()
  const compromissoCriado = compromissos.find(
    (c) => c.titulo === 'Título Antigo',
  )

  // 2. AÇÃO: Enviamos o PUT para alterar os dados dele
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

  // Esperamos que a API diga que deu tudo certo (200 OK)
  expect(responsePut.status).toBe(200)

  // 3. VERIFICAÇÃO: Buscamos a lista de novo para ter certeza que o banco salvou a alteração
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
  // Tentamos atualizar passando um ID, mas esquecendo de mandar o Título
  const dadosIncompletos = {
    id: 1,
    data: 'Quarta',
    // titulo está faltando de propósito!
  }

  const responsePut = await fetch('http://localhost:3000/api/v1/compromissos', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosIncompletos),
  })

  // Esperamos que a API nos barre por causa da validação
  expect(responsePut.status).toBe(400)
})
