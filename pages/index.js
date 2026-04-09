import { useState, useEffect } from 'react'
import styles from './Home.module.css'

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
  const [novoTitulo, setNovoTitulo] = useState('')

  useEffect(() => {
    async function carregarCompromissos() {
      try {
        const response = await fetch('/api/v1/compromissos')
        const data = await response.json()

        setCompromissos(data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    carregarCompromissos()
  }, [])

  async function abrirModal(dia) {
    setDiaSelecionado(dia)
    setNovoTitulo('')
    setModalAberto(true)
  }

  async function salvarCompromisso() {
    if (!novoTitulo) return

    const novoDado = {
      titulo: novoTitulo,
      data: diaSelecionado,
      descricao: '',
    }

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
          <div key={dia} className={styles.colunaDia}>
            <div className={styles.cabecalhoDia}>
              <h2 className={styles.tituloDia}>{dia}</h2>
              <button
                className={styles.botaoAdicionar}
                title="Adicionar"
                onClick={() => abrirModal(dia)}
              >
                +
              </button>
            </div>

            <div className={styles.listaCards}>
              {compromissos
                .filter((comp) => comp.data === dia)
                .map((comp) => (
                  <div key={comp.id} className={styles.card}>
                    <span className={styles.textoCard}>{comp.titulo}</span>
                    <button
                      className={styles.botaoRemover}
                      title="Remover"
                      onClick={() => removerCompromisso(comp.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Adicionar em {diaSelecionado}</h3>

            <input
              type="text"
              className={styles.input}
              placeholder="Ex: Estudar Programação"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              autoFocus
            ></input>

            <div className={styles.grupoBotoes}>
              <button
                className={styles.botaoCancelar}
                onClick={() => setModalAberto(false)}
              >
                Cancelar
              </button>
              <button
                className={styles.botaoSalvar}
                onClick={salvarCompromisso}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
