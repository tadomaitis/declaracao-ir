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
      <main className={styles.mainContent}>{children}</main>
      <FormFooter />
    </div>
  )
}
