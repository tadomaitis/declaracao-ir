import Image from 'next/image'

import styles from './Warning.module.css'

type Props = {
  title: string
  content: string
}

export function Warning({ title, content }: Props): JSX.Element {
  return (
    <div className={styles.attention}>
      <div className={styles.iconContainer}>
        <Image src="/svgs/warning.svg" width={24} height={24} />
        <h4>{title}</h4>
        <Image src="/svgs/warning.svg" width={24} height={24} />
      </div>
      <p>{content}</p>
    </div>
  )
}
