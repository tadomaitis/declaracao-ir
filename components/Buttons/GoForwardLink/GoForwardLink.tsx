import Link from 'next/link'

import styles from './GoForwardLink.module.css'

type Props = {
  path: string
  label: string
}

export function GoForwardLink({ path, label }: Props) {
  return (
    <Link href={path}>
      <a className={styles.forwardLink}>{label}</a>
    </Link>
  )
}
