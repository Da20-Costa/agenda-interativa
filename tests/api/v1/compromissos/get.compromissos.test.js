import fetch from 'node-fetch'

test('GET para /api/v1/compromissos deve listar os compromissos', async () => {
  const response = await fetch('http://localhost:3000/api/v1/compromissos')

  expect(response.status).toBe(200)

  const responseBody = await response.json()

  expect(Array.isArray(responseBody)).toBe(true)
})
