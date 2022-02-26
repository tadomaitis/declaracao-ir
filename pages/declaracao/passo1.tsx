import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'

import styles from './styles/Passo1.module.css'

const Passo1 = () => {
  return (
    <SiteLayout>
      <h2 className={styles.pageTitle}>Já nos conhecemos?</h2>
      <p className={styles.pageDescription}>
        Para começar, preencha seu primeiro nome, e escolha o perfil que melhor
        descreva seu perfil.
      </p>
      <Input
        id="firsName"
        label="Seu nome"
        type="text"
        placeholder="Digite seu primeiro nome"
      />
      <NavButtonsContainer
        goBackPath="/declaracao"
        goForwardPath="/declaracao/passo2"
      />
    </SiteLayout>
  )
}

export default Passo1
