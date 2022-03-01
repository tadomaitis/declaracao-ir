import { ReactElement, useEffect } from 'react'
import Image from 'next/image'

import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import {
  FormProvider,
  useFormContext,
  FormActions,
} from '@contexts/FormContext'

import styles from '../styles/conclusao.module.css'

const Conclusao = (): JSX.Element => {
  const { state, dispatch } = useFormContext()

  useEffect(() => {
    dispatch({
      type: FormActions.setFullName,
      payload: `${state.firstName} ${state.surname}`,
    })
    Object.values(state).forEach((value) => {
      if (value) {
        console.log(value)
      }
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
    </SiteLayout>
  )
}

Conclusao.getLayout = function getLayout(page: ReactElement): ReactElement {
  return <FormProvider>{page}</FormProvider>
}

export default Conclusao
