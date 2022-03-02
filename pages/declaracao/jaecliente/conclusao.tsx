import { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'

import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { GoBackLink } from '@components/Buttons/GoBackLink/GoBackLink'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from '../styles/conclusao.module.css'

const renderListItems = (obj: any): JSX.Element => {
  return (
    <>
      {Object.entries(obj).map(([key, value]) => {
        return (
          <li key={key} className={styles.collectedDataItem}>
            <span className={styles.collectedDataItemLabel}>{key}:</span>
            {value}
          </li>
        )
      })}
    </>
  )
}

const Conclusao = (): JSX.Element => {
  const { state, dispatch } = useFormContext()
  const [collectedData, setCollectedData] = useState({})

  useEffect(() => {
    dispatch({
      type: FormActions.setFullName,
      payload: `${state.firstName} ${state.surname}`,
    })
  }, [])

  useEffect(() => {
    setCollectedData({
      Nome: ` ${state.fullName}`,
      CPF: ` ${state.cpf}`,
      Telefone: ` ${state.phone}`,
      'Já é cliente': state.isAlreadyClient ? ' sim' : ' não',
      'Alteração de bens ou dependentes em relação à última declaração':
        state.changesFromPreviousDeclaration ? ' sim' : ' não',
    })
  }, [])

  return (
    <SiteLayout>
      <div className={styles.titleContainer}>
        <Image src="/svgs/success.svg" width={48} height={48} />
        <h2 className={styles.pageTitle}>Formulário Preenchido com Sucesso!</h2>
      </div>
      <p className={styles.pageContent}>
        Confira abaixo as informações que você preencheu. Se precisar corrigir
        algum campo, use a opção "Voltar" abaixo e preencha novamente.
      </p>
      <p className={styles.pageContent}>
        Se estiver tudo correto, clique no botão abaixo para enviar seus dados
        via Whatsapp. O WhatsApp será aberto em uma nova aba.
      </p>
      <p className={styles.pageContent}>
        Não se esqueça de enviar a foto ou PDF do(s) seu(s) informe(s) de
        rendimento. Você poderá enviá-los pelo Whatsapp, ou entregar
        pessoalmente na Rua João Trottmann 285 - Jardim do Sol, Próximo ao
        Grêmio da infibra, na mesma calçada da igreja do bairro. Estaremos
        atendendo presencialmente todos os dias, das 8h às 19h.
      </p>
      <p className={styles.pageContent}>
        A sua declaração poderá ser retirada no mesmo endereço e horários acima.
      </p>
      <p className={styles.pageContent}>
        Agradecemos a sua confiança no nosso trabalho.
      </p>
      <div className={styles.collectedData}>
        <ul className={styles.collectedDataList}>
          {renderListItems(collectedData)}
        </ul>
      </div>
      <GoBackLink path="/declaracao/inicial" label="Voltar" />
      <a
        href={`https://wa.me/5519991986063?text=${JSON.stringify(
          collectedData
        )}`}
      >
        Concluir
      </a>
    </SiteLayout>
  )
}

Conclusao.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <FormProvider>{page}</FormProvider>
}

export default Conclusao
