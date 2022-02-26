import { GoBackLink } from '../GoBackLink/GoBackLink'
import { GoForwardLink } from '../GoForwardLink/GoForwardLink'

import styles from './NavButtonsContainer.module.css'

type Props = {
  goBackPath: string
  goForwardPath: string
}

export function NavButtonsContainer({ goBackPath, goForwardPath }: Props) {
  return (
    <div className={styles.navButtonsContainer}>
      <GoBackLink path={goBackPath} label="Voltar" />
      <GoForwardLink path={goForwardPath} label="Avançar" />
    </div>
  )
}
