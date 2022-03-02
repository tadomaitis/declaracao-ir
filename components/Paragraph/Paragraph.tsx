import styles from './Paragraph.module.css'

type Props = {
  content: string
}

export function Paragraph({ content }: Props) {
  return <p className={styles.paragraphContent}>{content}</p>
}
