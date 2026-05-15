import fetch from 'node-fetch'

describe('Testes de Integração com APIs Externas', () => {
  it('Deve conseguir obter um conselho da Advice Slip API', async () => {
    const resposta = await fetch('https://api.adviceslip.com/advice')
    const dados = await resposta.json()

    expect(resposta.status).toBe(200)
    expect(dados).toHaveProperty('slip')
    expect(typeof dados.slip.advice).toBe('string')
  })

  it('Deve conseguir obter uma atividade da Bored API (Mirror)', async () => {
    const resposta = await fetch('https://bored.api.lewagon.com/api/activity')
    const dados = await resposta.json()

    expect(resposta.status).toBe(200)
    expect(dados).toHaveProperty('activity')
    expect(typeof dados.activity).toBe('string')
  })

  it('Deve conseguir traduzir um texto usando a MyMemory API', async () => {
    const textoParaTraduzir = 'Hello world'
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoParaTraduzir)}&langpair=en|pt-br`

    const resposta = await fetch(url)
    const dados = await resposta.json()

    expect(resposta.status).toBe(200)
    expect(dados.responseData).toHaveProperty('translatedText')
    expect(typeof dados.responseData.translatedText).toBe('string')
  })
})
