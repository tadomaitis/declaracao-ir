import InputMask from 'react-input-mask'
import styles from './Input.module.css'

type Props = {
  id: string
  label: string
  type: string
  placeholder: string
  mask: string | RegExp[]
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ id, label, type, placeholder, mask, onChange }: Props) {
  return (
    <div className={styles.inputContainer} onChange={onChange}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <InputMask
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        mask={mask}
      />
    </div>
  )
}
