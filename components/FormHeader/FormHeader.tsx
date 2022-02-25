import styles from './FormHeader.module.css'

export function FormHeader() {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>
        🦁 Imposto de Renda {new Date().getFullYear()}
      </h2>
    </header>
  )
}
