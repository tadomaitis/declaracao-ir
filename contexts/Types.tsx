export type Client = {
  currentStep: number
  firstName: string
  surname: string
  fullName: string
  cpf: string
  phone: string
  hasDeclaredBefore: boolean
  isAlreadyClient: boolean
  hasDependents?: boolean
  voterCard?: string
  birthDate?: string
  address?: string
  addressNumber?: string
  city?: string
  postalCode?: string
  state?: string
  bank?: string
  bankAgency?: string
  bankAccount?: string
  bankAccountDigit?: string
  bankAccountType?: string
  INSSNumber?: string
  dependents?: Dependent[]
  properties?: Property[]
  vehicles?: Vehicle[]
}

type Dependent = {
  type: string
  fullName: string
  cpf: string
  birthDate: string
}

type Property = {
  name: string
  type: 'casa' | 'apartamento' | 'terreno'
  registration?: string
  acquisitionDate?: string
  value?: string
}

type Vehicle = {
  brand: string
  model: string
  acquisitionDate?: string
  value?: string
}
