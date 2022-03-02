import Image from 'next/image'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { GoForwardLink } from '@components/Buttons/GoForwardLink/GoForwardLink'
import { Paragraph } from '@components/Paragraph/Paragraph'

import styles from './styles/declaracao.module.css'

const Declaracao = () => {
  return (
    <SiteLayout>
      <div className={styles.welcomeImage}>
        <Image
          src="/svgs/welcome.svg"
          alt="waving person figure"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.mainTitle}>
          Olá, bem-vindo(a) ao nosso formulário para declaração do Imposto de
          Renda {new Date().getFullYear()}
        </h1>
        <Paragraph content="Agradecemos por nos escolher para fazer sua declaração!" />
        <Paragraph
          content="Para este ano, criamos um processo automatizado de contato inicial, a
          fim de tornar mais dinâmica a organização das informações necessárias.
          Vamos lá?"
        />
        <GoForwardLink path="/declaracao/inicial" label="Começar" />
      </div>
    </SiteLayout>
  )
}

export default Declaracao
