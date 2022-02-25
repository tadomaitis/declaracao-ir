import { ReactNode } from 'react'
import { FormFooter } from '@components/FormFooter/FormFooter'
import { FormHeader } from '@components/FormHeader/FormHeader'

import styles from './SiteLayout.module.css'

type Props = {
  children: ReactNode
}

export function SiteLayout({ children }: Props) {
  return (
    <div className={styles.area}>
      <FormHeader />
      <div className={styles.content}>{children}</div>
      <FormFooter />
    </div>
  )
}
