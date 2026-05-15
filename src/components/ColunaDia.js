import styles from 'src/components/ColunaDia.module.css'
import Card from 'src/components/Card.js'
import { useAtividade } from 'src/hooks/useAtividade.js'

export default function ColunaDia({
  dia,
  compromissosDoDia,
  aoAdicionar,
  aoRemover,
  aoEditar,
  aoAlternarStatus,
}) {
  const { sugestao, carregando, buscarAtividade } = useAtividade()

  const temCompromissos = compromissosDoDia && compromissosDoDia.length > 0

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
        {temCompromissos ? (
          compromissosDoDia.map((comp) => (
            <Card
              key={comp.id}
              compromisso={comp}
              aoRemover={aoRemover}
              aoEditar={aoEditar}
              aoAlternarStatus={aoAlternarStatus}
            />
          ))
        ) : (
          <div className={styles.containerDiaLivre}>
            <p className={styles.textoDiaLivre}>Dia livre! 🎉</p>
            <button
              className={styles.botaoSugerir}
              onClick={buscarAtividade}
              disabled={carregando}
            >
              {carregando ? 'Buscando...' : 'Sugerir Atividade'}
            </button>

            {sugestao && <p className={styles.textoSugestao}>💡 {sugestao}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
