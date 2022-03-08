import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import api from '../service/api.service'

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

export type AdminContextProps = {
  categories: Category[]
  addCategory: (categoryInput: Category) => void
  editCategory: (categoryId: string) => void
  deleteCategory: (categoryId: string) => void
  moreDetailCategory: (categoryId: string) => void
  selectedCategory: Category | null
}

const AdminContext = createContext<AdminContextProps>({} as AdminContextProps)

export function AdminProvider({ children }: AdminProviderProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  function addCategory(categoryInput: Category): void {
    setCategories(initialState => [...initialState, categoryInput])
  }

  const editCategory = (id: string) => {
    console.log('edit', id)
    onHandlerSelectedCategory(id)
  }
  const deleteCategory = (id: string) => {
    console.log('remove', id)
  }
  const moreDetailCategory = (id: string) => {
    console.log('more detail', id)
  }

  const onHandlerSelectedCategory = (categoryId: string) => {
    const category = categories.find(category => category.id === categoryId)
    setSelectedCategory(category ?? null);
  }

  return (
    <AdminContext.Provider
      value={{
        selectedCategory,
        categories,
        addCategory,
        editCategory,
        deleteCategory,
        moreDetailCategory
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)

  return context
}
