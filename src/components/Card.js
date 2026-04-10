import styles from 'src/components/Card.module.css'

export default function Card({ compromisso, aoRemover }) {
  return (
    <div className={styles.card}>
      <span className={styles.textoCard}>{compromisso.titulo}</span>
      <button
        className={styles.botaoRemover}
        title="Remover"
        onClick={() => aoRemover(compromisso.id)}
      >
        x
      </button>
    </div>
  )
}
