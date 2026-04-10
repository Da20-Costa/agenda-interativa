import { useState } from 'react'
import styles from './Home.module.css'
import ColunaDia from 'src/components/ColunaDia.js'
import ModalAdicionar from 'src/components/ModalAdicionar'
import { diasSemana } from 'src/utils/constants.js'
import { useCompromissos } from '/src/hooks/useCompromissos.js'

export default function Home() {
  const { compromissos, salvarCompromisso, removerCompromisso } =
    useCompromissos()

  const [modalAberto, setModalAberto] = useState(false)
  const [diaSelecionado, setDiaSelecionado] = useState('')

  async function abrirModal(dia) {
    setDiaSelecionado(dia)
    setModalAberto(true)
  }

  async function lidarComSalvar(novoDado) {
    const sucesso = await salvarCompromisso(novoDado)
    if (sucesso) {
      setModalAberto(false)
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
          aoSalvar={lidarComSalvar}
        />
      )}
    </div>
  )
}
