import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import styles from './GoBackLink.module.css'

type Props = {
  path: string
  label: string
}

export function GoBackLink({ path, label }: Props) {
  return (
    <Link href={path}>
      <a className={styles.goBackLink}>
        <FiArrowLeft className={styles.goBackLinkIcon} /> {label}
      </a>
    </Link>
  )
}
