import styles from './FraseMotivacional.module.css'
import { useFraseMotivacional } from 'src/hooks/useFraseMotivacional.js'

export default function FraseMotivacional() {
  const { conselho } = useFraseMotivacional()

  return (
    <div className={styles.containerFrase}>
      <p className={styles.textoFrase}>
        💡 Inspiração da semana: &quot;{conselho}&quot;
      </p>
    </div>
  )
}
