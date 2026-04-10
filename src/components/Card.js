import { useState } from 'react'
import styles from 'src/components/Card.module.css'

export default function Card({ compromisso, aoRemover, aoEditar }) {
  const [expandido, setExpandido] = useState(false)

  function lidarComDelete(e) {
    e.stopPropagation()
    aoRemover(compromisso.id)
  }

  function lidarComEdicao(e) {
    e.stopPropagation()
    aoEditar(compromisso)
  }

  return (
    <div className={styles.card} onClick={() => setExpandido(!expandido)}>
      <div className={styles.cabecalhoCard}>
        <span className={styles.textoCard}>{compromisso.titulo}</span>

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
