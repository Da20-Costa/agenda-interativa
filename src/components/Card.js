import { useState } from 'react'
import styles from 'src/components/Card.module.css'

export default function Card({
  compromisso,
  aoRemover,
  aoEditar,
  aoAlternarStatus,
}) {
  const [expandido, setExpandido] = useState(false)

  function lidarComDelete(e) {
    e.stopPropagation()
    aoRemover(compromisso.id)
  }

  function lidarComEdicao(e) {
    e.stopPropagation()
    aoEditar(compromisso)
  }

  function lidarComStatus(e) {
    e.stopPropagation()
    aoAlternarStatus(compromisso)
  }

  const estaConcluido =
    compromisso.concluido === 1 || compromisso.concluido === true

  return (
    <div
      className={`${styles.card} ${estaConcluido ? styles.cardConcluido : ''}`}
      onClick={() => setExpandido(!expandido)}
    >
      <div className={styles.cabecalhoCard}>
        <div className={styles.areaTitulo}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={estaConcluido}
            onChange={lidarComStatus}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <span
          className={`${styles.textoCard} ${estaConcluido ? styles.textoConcluido : ''}`}
        >
          {compromisso.titulo}
        </span>

        <div className={styles.acoes}>
          <button
            className={styles.botaoEditar}
            title="Editar"
            onClick={lidarComEdicao}
          >
            ✏️
          </button>
          <button
            className={styles.botaoRemover}
            title="Remover"
            onClick={lidarComDelete}
          >
            x
          </button>
        </div>
      </div>

      {expandido && compromisso.descricao && (
        <div className={styles.descricao}>{compromisso.descricao}</div>
      )}
    </div>
  )
}
