import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import ColunaDia from 'src/components/ColunaDia.js'
import ModalAdicionar from 'src/components/ModalAdicionar'

export default function Home() {
  const diasSemana = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ]

  const [compromissos, setCompromissos] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [diaSelecionado, setDiaSelecionado] = useState('')

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

  async function abrirModal(dia) {
    setDiaSelecionado(dia)
    setModalAberto(true)
  }

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

      setModalAberto(false)
    }
  }

  async function removerCompromisso(id) {
    const response = await fetch(`/api/v1/compromissos?id=${id}`, {
      method: 'DELETE',
    })

    if (response.status === 204) {
      setCompromissos((prev) => prev.filter((comp) => comp.id !== id))
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cronograma Semanal</h1>

      <div className={styles.grid}>
        {diasSemana.map((dia) => (
          <ColunaDia
            key={dia}
            dia={dia}
            compromissosDoDia={compromissos.filter((comp) => comp.data === dia)}
            aoAdicionar={abrirModal}
            aoRemover={removerCompromisso}
          />
        ))}
      </div>

      {modalAberto && (
        <ModalAdicionar
          dia={diaSelecionado}
          aoFechar={() => setModalAberto(false)}
          aoSalvar={salvarCompromisso}
        />
      )}
    </div>
  )
}
