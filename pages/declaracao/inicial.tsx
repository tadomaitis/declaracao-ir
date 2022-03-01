import { ReactElement } from 'react'

import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'
import { SelectOption } from '@components/SelectOption/SelectOption'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from './styles/jaecliente.module.css'

const JaECliente = (): JSX.Element => {
  const { state, dispatch } = useFormContext()

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: FormActions.setFirstName,
      payload: event.target.value,
    })
  }

  const handleClickOnIsAlreadyClient = () => {
    dispatch({
      type: FormActions.setIsAlreadyClient,
      payload: true,
    })
  }

  const handleClickOnNewClient = () => {
    dispatch({
      type: FormActions.setIsAlreadyClient,
      payload: false,
    })
  }

  return (
    <SiteLayout>
      <h2 className={styles.pageTitle}>Já nos conhecemos?</h2>
      <p className={styles.pageDescription}>
        Para começar, preencha seu primeiro nome, e escolha a opção que melhor
        descreva seu perfil.
      </p>
      <Input
        id="firsName"
        label="Seu nome"
        type="text"
        placeholder="Digite seu primeiro nome"
        onChange={handleNameInputChange}
      />
      <p className={styles.pageContent}>
        Você já é meu cliente de anos anteriores?
      </p>
      <SelectOption
        label="Sim, eu já declarei IR com você antes"
        selected={state.isAlreadyClient}
        onClick={handleClickOnIsAlreadyClient}
      />
      <SelectOption
        label="Não, esta será a primeira vez"
        selected={!state.isAlreadyClient}
        onClick={handleClickOnNewClient}
      />
      <NavButtonsContainer
        goBackPath="/declaracao"
        goForwardPath="/declaracao/jaecliente/passo1"
      />
    </SiteLayout>
  )
}

JaECliente.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <FormProvider>{page}</FormProvider>
}

export default JaECliente
