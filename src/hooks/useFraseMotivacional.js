import { useState, useEffect } from 'react'

export function useFraseMotivacional() {
  const [conselho, setConselho] = useState(
    'Buscando inspiração para a semana...',
  )

  useEffect(() => {
    const buscarConselho = async () => {
      try {
        const resposta = await fetch('https://api.adviceslip.com/advice')
        const dados = await resposta.json()
        const conselhoIngles = dados.slip.advice

        const respostaTraducao = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(conselhoIngles)}&langpair=en|pt-br`,
        )
        const dadosTraducao = await respostaTraducao.json()

        setConselho(dadosTraducao.responseData.translatedText)
      } catch (erro) {
        setConselho('Aproveite ao máximo a sua semana!')
      }
    }

    buscarConselho()
  }, [])

  return { conselho }
}
