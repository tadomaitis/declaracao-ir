import { createContext, ReactNode, useContext, useReducer } from 'react'
import type { Client } from './Types'

type Action = {
  type: FormActions
  payload: any
}

export enum FormActions {
  setCurrentStep,
  setFullName,
  setCPF,
  setPhone,
  setHasDeclaredBefore,
  setIsAlreadyClient,
  setHasDependents,
  setVoterCard,
  setBirthDate,
  setAddress,
  setAddressNumber,
  setCity,
  setPostalCode,
  setState,
  setBank,
  setBankAgency,
  setBankAccount,
  setBankAccountDigit,
  setBankAccountType,
  setINSSNumber,
  setDependent,
  setProperty,
  setVehicle,
}

type ContextType = {
  state: Client
  dispatch: (action: Action) => void
}

type FormProviderProps = {
  children: ReactNode
}

const initialClientData: Client = {
  currentStep: 0,
  firstName: '',
  surname: '',
  fullName: '',
  cpf: '',
  phone: '',
  hasDeclaredBefore: false,
  isAlreadyClient: false,
}

const FormContext = createContext<ContextType | undefined>(undefined)

const formReducer = (state: Client, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setFullName:
      return { ...state, fullName: action.payload }
    case FormActions.setCPF:
      return { ...state, cpf: action.payload }
    case FormActions.setPhone:
      return { ...state, phone: action.payload }
    case FormActions.setHasDeclaredBefore:
      return { ...state, hasDeclaredBefore: action.payload }
    case FormActions.setIsAlreadyClient:
      return { ...state, isAlreadyClient: action.payload }
    case FormActions.setHasDependents:
      return { ...state, hasDependents: action.payload }
    case FormActions.setVoterCard:
      return { ...state, voterCard: action.payload }
    case FormActions.setBirthDate:
      return { ...state, birthDate: action.payload }
    case FormActions.setAddress:
      return { ...state, address: action.payload }
    case FormActions.setAddressNumber:
      return { ...state, addressNumber: action.payload }
    case FormActions.setCity:
      return { ...state, city: action.payload }
    case FormActions.setPostalCode:
      return { ...state, postalCode: action.payload }
    case FormActions.setState:
      return { ...state, state: action.payload }
    case FormActions.setBank:
      return { ...state, bank: action.payload }
    case FormActions.setBankAgency:
      return { ...state, bankAgency: action.payload }
    case FormActions.setBankAccount:
      return { ...state, bankAccount: action.payload }
    case FormActions.setBankAccountDigit:
      return { ...state, bankAccountDigit: action.payload }
    case FormActions.setBankAccountType:
      return { ...state, bankAccountType: action.payload }
    case FormActions.setINSSNumber:
      return { ...state, INSSNumber: action.payload }
    case FormActions.setDependent:
      return { ...state, dependents: action.payload }
    case FormActions.setProperty:
      return { ...state, properties: action.payload }
    case FormActions.setVehicle:
      return { ...state, vehicles: action.payload }
    default:
      return state
  }
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialClientData)

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }

  return context
}
