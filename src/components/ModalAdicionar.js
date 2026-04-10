import { useState } from 'react'
import styles from 'src/components/ModalAdicionar.module.css'

export default function ModalAdicionar({ dia, aoFechar, aoSalvar }) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  function enviarDados() {
    if (!titulo) return

    aoSalvar({
      titulo: titulo,
      descricao: descricao,
      data: dia,
    })
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Adicionar em {dia}</h3>

        <input
          type="text"
          className={styles.input}
          placeholder="Título (Ex: Estudar Programação)"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          autoFocus
        />

        <textarea
          className={styles.textarea}
          placeholder="Descrição (Opcional. Ex: Fazer exercícios em Python)"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <div className={styles.grupoBotoes}>
          <button className={styles.botaoCancelar} onClick={aoFechar}>
            Cancelar
          </button>
          <button className={styles.botaoSalvar} onClick={enviarDados}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
