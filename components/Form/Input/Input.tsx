import styles from './Input.module.css'

type Props = {
  id: string
  label: string
  type: string
  placeholder: string
}

export function Input({ id, label, type, placeholder }: Props) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  )
}
