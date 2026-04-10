import styles from './Footer.module.css'

export default function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {anoAtual} Davi de Sousa Costa. Todos os direitos reservados.
      </p>
      <div className={styles.links}>
        <a
          href="https://github.com/Da20-Costa/agenda-interativa"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub do Projeto
        </a>
        <span>•</span>
        <a
          href="https://linkedin.com/in/davi-costa-ti"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
