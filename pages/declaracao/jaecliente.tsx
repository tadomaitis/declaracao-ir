import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'
import { SelectOption } from '@components/SelectOption/SelectOption'

import styles from './styles/JaECliente.module.css'

const JaECliente = () => {
  const handleClickOnSelect = () => {
    console.log('doh')
  }

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
      <p className={styles.pageContent}>
        Você já é meu cliente de anos anteriores?
      </p>
      <SelectOption
        label="Sim, eu já declarei IR com você antes"
        selected={true}
        onClick={handleClickOnSelect}
      />
      <SelectOption
        label="Não, esta será a primeira vez"
        selected={false}
        onClick={handleClickOnSelect}
      />
      <NavButtonsContainer
        goBackPath="/declaracao"
        goForwardPath="/declaracao/passo2"
      />
    </SiteLayout>
  )
}

export default JaECliente
