import styles from './Input.module.css'

type Props = {
  id: string
  label: string
  type: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ id, label, type, placeholder, onChange }: Props) {
  return (
    <div className={styles.inputContainer} onChange={onChange}>
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
