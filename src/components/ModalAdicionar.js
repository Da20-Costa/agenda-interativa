import { useState } from 'react'
import styles from 'src/components/ModalAdicionar.module.css'

export default function ModalAdicionar({
  dia,
  compromissoExistente,
  aoFechar,
  aoSalvar,
}) {
  const [titulo, setTitulo] = useState(
    compromissoExistente ? compromissoExistente.titulo : '',
  )
  const [descricao, setDescricao] = useState(
    compromissoExistente?.descricao || '',
  )

  function enviarDados(e) {
    if (e) e.preventDefault()

    if (!titulo) return

    aoSalvar({
      id: compromissoExistente?.id,
      titulo: titulo,
      descricao: descricao,
      data: dia,
      concluido: compromissoExistente ? compromissoExistente.concluido : 0,
    })
  }

  function lidarComEnterDescricao(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      enviarDados()
    }
  }

  const textoCabecalho = compromissoExistente ? 'Editar em' : 'Adicionar em'

  return (
    <div className={styles.modalOverlay}>
      <form className={styles.modal} onSubmit={enviarDados}>
        <h3>
          {textoCabecalho} {dia}
        </h3>

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
          onKeyDown={lidarComEnterDescricao}
        />

        <div className={styles.grupoBotoes}>
          <button
            type="button"
            className={styles.botaoCancelar}
            onClick={aoFechar}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={styles.botaoSalvar}
            onClick={enviarDados}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
