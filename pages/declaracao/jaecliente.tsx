import { ReactElement, useEffect } from 'react'

import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'
import { SelectOption } from '@components/SelectOption/SelectOption'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from './styles/JaECliente.module.css'

const JaECliente = (): JSX.Element => {
  const { state, dispatch } = useFormContext()

  useEffect(() => {
    console.log(state)
  }, [])

  const handleClickOnSelect = () => {
    dispatch({
      type: FormActions.setIsAlreadyClient,
      payload: !state.isAlreadyClient,
    })
  }

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: FormActions.setFirstName,
      payload: event.target.value,
    })
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
        onChange={handleNameInputChange}
      />
      <p className={styles.pageContent}>
        Você já é meu cliente de anos anteriores?
      </p>
      <SelectOption
        label="Sim, eu já declarei IR com você antes"
        selected={state.isAlreadyClient}
        onClick={handleClickOnSelect}
      />
      <SelectOption
        label="Não, esta será a primeira vez"
        selected={!state.isAlreadyClient}
        onClick={handleClickOnSelect}
      />
      <NavButtonsContainer
        goBackPath="/declaracao"
        goForwardPath="/declaracao/jaeclientepasso1"
      />
    </SiteLayout>
  )
}

JaECliente.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <FormProvider>{page}</FormProvider>
}

export default JaECliente
