import styles from './SelectOption.module.css'
import Image from 'next/image'

type Props = {
  label: string
  selected: boolean
  onClick: () => void
}

export function SelectOption({ label, selected, onClick }: Props) {
  return (
    <div
      className={`${styles.selectOption} ${
        selected ? styles.selectedOption : ''
      }`}
      onClick={onClick}
    >
      <div className={styles.selectIcon}>
        {selected && <Image src="/svgs/tick.svg" width={18} height={18} />}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}
