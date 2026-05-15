import { useState } from 'react'
import styles from './Home.module.css'
import ColunaDia from 'src/components/ColunaDia.js'
import ModalAdicionar from 'src/components/ModalAdicionar'
import FraseMotivacional from 'src/components/FraseMotivacional'
import { diasSemana } from 'src/utils/constants.js'
import { useCompromissos } from '/src/hooks/useCompromissos.js'
import Footer from '../src/components/Footer'

export default function Home() {
  const {
    compromissos,
    salvarCompromisso,
    removerCompromisso,
    editarCompromisso,
  } = useCompromissos()

  const [modalAberto, setModalAberto] = useState(false)
  const [diaSelecionado, setDiaSelecionado] = useState('')
  const [compromissoEditando, setCompromissoEditando] = useState(null)

  function abrirModalParaCriar(dia) {
    setDiaSelecionado(dia)
    setCompromissoEditando(null)
    setModalAberto(true)
  }

  function abrirModalParaEditar(compromisso) {
    setDiaSelecionado(compromisso.data)
    setCompromissoEditando(compromisso)
    setModalAberto(true)
  }

  async function lidarComSalvar(dadosDoModal) {
    let sucesso = false

    if (dadosDoModal.id) {
      sucesso = await editarCompromisso(dadosDoModal.id, dadosDoModal)
    } else {
      sucesso = await salvarCompromisso(dadosDoModal)
    }

    if (sucesso) {
      setModalAberto(false)
    }
  }

  async function alternarStatusCompromisso(compromissoClicado) {
    const novoStatus = !compromissoClicado.concluido

    await editarCompromisso(compromissoClicado.id, {
      ...compromissoClicado,
      concluido: novoStatus,
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cronograma Semanal</h1>

      <FraseMotivacional />

      <div className={styles.grid}>
        {diasSemana.map((dia) => (
          <ColunaDia
            key={dia}
            dia={dia}
            compromissosDoDia={compromissos.filter((comp) => comp.data === dia)}
            aoAdicionar={abrirModalParaCriar}
            aoRemover={removerCompromisso}
            aoEditar={abrirModalParaEditar}
            aoAlternarStatus={alternarStatusCompromisso}
          />
        ))}
      </div>

      {modalAberto && (
        <ModalAdicionar
          dia={diaSelecionado}
          compromissoExistente={compromissoEditando}
          aoFechar={() => setModalAberto(false)}
          aoSalvar={lidarComSalvar}
        />
      )}

      <Footer />
    </div>
  )
}
