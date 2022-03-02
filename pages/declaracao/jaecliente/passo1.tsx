import { ReactElement } from 'react'
import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Paragraph } from '@components/Paragraph/Paragraph'
import { Input } from '@components/Form/Input/Input'
import { SelectOption } from '@components/SelectOption/SelectOption'
import { Warning } from '@components/Warning/Warning'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from '../styles/jaecliente.module.css'

const JaEClientePasso1 = (): JSX.Element => {
  const { state, dispatch } = useFormContext()

  const handleSurnameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: FormActions.setSurname,
      payload: event.target.value,
    })
    dispatch({
      type: FormActions.setFullName,
      payload: `${state.firstName} ${event.target.value}`,
    })
  }

  const handleCPFInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setCPF,
      payload: event.target.value,
    })
  }

  const handlePhoneInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: FormActions.setPhone,
      payload: event.target.value,
    })
  }

  const handleClickOnNoChanges = () => {
    dispatch({
      type: FormActions.setChangesFromPreviousDeclaration,
      payload: false,
    })
  }

  const handleClickOnChanges = () => {
    dispatch({
      type: FormActions.setChangesFromPreviousDeclaration,
      payload: true,
    })
  }

  return (
    <SiteLayout>
      <h2 className={styles.pageTitle}>
        Bem-vindo de volta, {state.firstName}
      </h2>
      <Paragraph
        content="Como você já é meu cliente, já temos a maior parte dos dados que
        precisamos. Vamos só confirmar umas coisas!"
      />
      <Input
        id="surname"
        label="Seu sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
        onChange={handleSurnameInputChange}
        mask=""
      />
      <Input
        id="cpf"
        label="Seu CPF"
        type="text"
        placeholder="Digite seu CPF (apenas números)"
        onChange={handleCPFInputChange}
        mask="999.999.999-99"
      />
      <Input
        id="phone"
        label="Seu telefone (com DDD)"
        type="tel"
        placeholder="(00) 00000-0000"
        onChange={handlePhoneInputChange}
        mask="(99) 99999-9999"
      />
      <Paragraph
        content="Houve alguma alteração referente a bens (imóveis, veículos e/ou
        aplicação financeira) ou dependentes (filhos, cônjuges e/ou pais)?"
      />
      <Warning
        title="Atenção!"
        content="Se ao longo do ano de 2021 seus dependentes trabalharam com 
          registro em carteira ou receberam algum benefício (como auxílio 
          emergencial, por exemplo), você deve retirá-los da declaração. Veja 
          mais em nosso FAQ aqui."
      />
      <SelectOption
        label="Não, não houve nenhuma alteração de bens e/ou dependentes"
        selected={!state.changesFromPreviousDeclaration}
        onClick={handleClickOnNoChanges}
      />
      <SelectOption
        label="Sim, eu preciso informar alterações"
        selected={state.changesFromPreviousDeclaration}
        onClick={handleClickOnChanges}
      />
      <NavButtonsContainer
        goBackPath="/declaracao/jaecliente"
        goForwardPath="conclusao"
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
