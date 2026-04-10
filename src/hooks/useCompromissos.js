import { useState, useEffect } from 'react'

export function useCompromissos() {
  const [compromissos, setCompromissos] = useState([])

  useEffect(() => {
    async function carregarCompromissos() {
      try {
        const response = await fetch('/api/v1/compromissos')
        const dados = await response.json()

        setCompromissos(dados)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    carregarCompromissos()
  }, [])

  async function salvarCompromisso(novoDado) {
    const response = await fetch('/api/v1/compromissos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoDado),
    })

    if (response.status === 201) {
      const responseGet = await fetch('/api/v1/compromissos')
      const dadosAtualizados = await responseGet.json()
      setCompromissos(dadosAtualizados)

      return true
    }
    return false
  }

  async function removerCompromisso(id) {
    const response = await fetch(`/api/v1/compromissos?id=${id}`, {
      method: 'DELETE',
    })

    if (response.status === 204) {
      setCompromissos((prev) => prev.filter((comp) => comp.id !== id))
    }
  }

  async function editarCompromisso(id, dadosAtualizados) {
    const response = await fetch('/api/v1/compromissos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, ...dadosAtualizados }),
    })

    if (response.status === 200) {
      const responseGet = await fetch('/api/v1/compromissos')
      const listaAtualizada = await responseGet.json()
      setCompromissos(listaAtualizada)
      return true
    }
    return false
  }

  const useCompromissos = {
    compromissos,
    salvarCompromisso,
    removerCompromisso,
    editarCompromisso,
  }

  return useCompromissos
}
