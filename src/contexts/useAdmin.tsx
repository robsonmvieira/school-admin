import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import api from '../service/api.service';

export class Category {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
}

// export type CategoryDTO = Pick<Category, "title"| "id">
export type AdminProviderProps = {
  children: ReactNode
}


export type AdminContextProps =  {
  categories: Category[]
  addCategory: (categoryInput: Category) => void
}

const AdminContext = createContext<AdminContextProps>({} as AdminContextProps)


export function AdminProvider({children}:AdminProviderProps) {
  const [categories, setCategories] = useState<Category[]>([])

  function addCategory(categoryInput: Category): void {
    setCategories(initialState => [...initialState, categoryInput])
  }

  return <AdminContext.Provider value={{categories, addCategory}}>
    {children}
    </AdminContext.Provider>
}

export function useAdmin() {
  const context = useContext(AdminContext)

  return context
}
