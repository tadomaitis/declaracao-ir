import Image from 'next/image'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'

import styles from './styles/Declaracao.module.css'
import { GoForwardLink } from '@components/GoForwardLink/GoForwardLink'

const Declaracao = () => {
  return (
    <SiteLayout>
      <main className={styles.mainContent}>
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
          <p className={styles.mainText}>
            Agradecemos por nos escolher para fazer sua declaração!
          </p>
          <p className={styles.mainText}>
            Para este ano, criamos um processo automatizado de contato inicial,
            a fim de tornar mais dinâmica a organização das informações
            necessárias. Vamos lá?
          </p>
          <GoForwardLink path="/declaracao/passo1" label="Começar" />
        </div>
      </main>
    </SiteLayout>
  )
}

export default Declaracao
