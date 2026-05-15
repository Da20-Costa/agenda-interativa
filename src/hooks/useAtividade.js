import { useState } from 'react'

export function useAtividade() {
  const [sugestao, setSugestao] = useState('')
  const [carregando, setCarregando] = useState(false)

  const buscarAtividade = async () => {
    setCarregando(true)
    try {
      const resposta = await fetch('https://bored.api.lewagon.com/api/activity')
      const dados = await resposta.json()
      const atividadeIngles = dados.activity

      const respostaTraducao = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(atividadeIngles)}&langpair=en|pt-br`,
      )
      const dadosTraducao = await respostaTraducao.json()

      setSugestao(dadosTraducao.responseData.translatedText)
    } catch (erro) {
      setSugestao('Que tal organizar suas metas da próxima semana?')
    } finally {
      setCarregando(false)
    }
  }

  return { sugestao, carregando, buscarAtividade }
}
