import { ReactElement } from 'react'
import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'
import { SelectOption } from '@components/SelectOption/SelectOption'
import { Warning } from '@components/Warning/Warning'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from '../styles/JaECliente.module.css'

const JaEClientePasso1 = (): JSX.Element => {
  const { state, dispatch } = useFormContext()

  const handleClickOnSelect = () => {
    dispatch({
      type: FormActions.setChangesFromPreviousDeclaration,
      payload: !state.changesFromPreviousDeclaration,
    })
  }

  const handleSurnameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: FormActions.setSurname,
      payload: event.target.value,
    })
  }

  const handleCPFInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setCPF,
      payload: event.target.value,
    })
  }

  return (
    <SiteLayout>
      <h2 className={styles.pageTitle}>
        Bem-vindo de volta, {state.firstName}
      </h2>
      <p className={styles.pageContent}>
        Como você já é meu cliente, já temos a maior parte dos dados que
        precisamos. Vamos só confirmar umas coisinhas!
      </p>
      <Input
        id="surname"
        label="Seu sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
        onChange={handleSurnameInputChange}
      />
      <Input
        id="cpf"
        label="Seu CPF"
        type="text"
        placeholder="Digite seu CPF"
        onChange={handleCPFInputChange}
      />
      <p className={styles.pageContent}>
        Houve alguma alteração referente a bens (imóveis, veículos e/ou
        aplicação financeira) ou dependentes (filhos, cônjuges e/ou pais)?
      </p>
      <Warning
        title="Atenção"
        content="Se seus dependentes trabalharam com registro em carteira ou receberam
          algum benefício (como auxílio emergencial, por exemplo), você deve
          retirá-los da declaração. Veja mais em nosso FAQ aqui."
      />
      <SelectOption
        label="Não, não houve nenhuma alteração de bens e/ou dependentes"
        selected={!state.changesFromPreviousDeclaration}
        onClick={handleClickOnSelect}
      />
      <SelectOption
        label="Sim, eu preciso informar alterações"
        selected={state.changesFromPreviousDeclaration}
        onClick={handleClickOnSelect}
      />
      <NavButtonsContainer
        goBackPath="/declaracao/jaecliente"
        goForwardPath="passo2"
      />
    </SiteLayout>
  )
}

JaEClientePasso1.getLayout = function getLayout(
  page: ReactElement
): ReactElement {
  return <FormProvider>{page}</FormProvider>
}

export default JaEClientePasso1