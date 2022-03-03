import {createContext, ReactNode, useContext, useState} from 'react'

export type AuthContextProps = {
  user: User
  employee: Employee
}

export type AuthProviderProps = {
  children: ReactNode
}

export type User = {
  email: string;
  isLogged: boolean
}

export type Employee = {
  email: string,
  position: string
  site: string,
  description: string,
  currentPayment: string
  foodTicket: string
  discount: string
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)


export function AuthProvider({children}: AuthProviderProps) {
  const [employee, setEmployee] = useState<Employee>({} as Employee)
  const [user, setUser] = useState<User>({} as User)
  return (
    <AuthContext.Provider value={{employee, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const authContext = useContext(AuthContext)

  return authContext
}
