import { useState } from 'react'
import styles from 'src/components/Card.module.css'

export default function Card({ compromisso, aoRemover }) {
  const [expandido, setExpandido] = useState(false)

  function lidarComDelete(e) {
    e.stopPropagation()
    aoRemover(compromisso.id)
  }

  return (
    <div className={styles.card} onClick={() => setExpandido(!expandido)}>
      <div className={styles.cabecalhoCard}>
        <span className={styles.textoCard}>{compromisso.titulo}</span>
        <button
          className={styles.botaoRemover}
          title="Remover"
          onClick={lidarComDelete}
        >
          x
        </button>
      </div>
      {expandido && compromisso.descricao && (
        <div className={styles.descricao}>{compromisso.descricao}</div>
      )}
    </div>
  )
}
