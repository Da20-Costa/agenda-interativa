import styles from 'src/components/ColunaDia.module.css'
import Card from 'src/components/Card.js'

export default function ColunaDia({
  dia,
  compromissosDoDia,
  aoAdicionar,
  aoRemover,
}) {
  return (
    <div className={styles.colunaDia}>
      <div className={styles.cabecalhoDia}>
        <h2 className={styles.tituloDia}>{dia}</h2>
        <button
          className={styles.botaoAdicionar}
          title="Adicionar"
          onClick={() => aoAdicionar(dia)}
        >
          +
        </button>
      </div>

      <div className={styles.listaCards}>
        {compromissosDoDia.map((comp) => (
          <Card key={comp.id} compromisso={comp} aoRemover={aoRemover} />
        ))}
      </div>
    </div>
  )
}
