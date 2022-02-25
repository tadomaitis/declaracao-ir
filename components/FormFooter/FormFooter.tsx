import Image from 'next/image'
import Link from 'next/link'

import styles from './FormFooter.module.css'

export function FormFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <p className={styles.colTitle}>
            Imposto de Renda {new Date().getFullYear()}
          </p>
          <p className={styles.contact}>
            <Image src="/svgs/whatsapp.svg" width={18} height={18} />
            (19) 19 98721-0990
          </p>
        </div>
        <div className={styles.footerCol}>
          <Link href="/faq">Perguntas frequentes</Link>
        </div>
      </div>
    </footer>
  )
}
