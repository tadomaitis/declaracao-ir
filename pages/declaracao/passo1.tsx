import { NavButtonsContainer } from '@components/Buttons/NavButtonsContainer/NavButtonsContainer'
import { SiteLayout } from '@components/SiteLayout/SiteLayout'
import { Input } from '@components/Form/Input/Input'

import styles from './styles/Passo1.module.css'

const Passo1 = () => {
  return (
    <SiteLayout>
      <main className={styles.mainContent}>Esse é o passo 1</main>
      <form className="container mx-auto flex flex-col space-y-12">
        <fieldset className="bg-coolGray-50 grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm">
          <div className="col-span-full space-y-2 lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <Input
              id="firsName"
              label="Seu primeiro nome"
              type="text"
              placeholder="Digite seu primeiro nome"
            />
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="text-coolGray-900 w-full rounded-md border-2 focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="border-coolGray-300 text-coolGray-900 w-full rounded-md focus:ring focus:ring-violet-600 focus:ring-opacity-75"
              />
            </div>
          </div>
        </fieldset>
      </form>
      <NavButtonsContainer
        goBackPath="/declaracao"
        goForwardPath="/declaracao/passo2"
      />
    </SiteLayout>
  )
}

export default Passo1
