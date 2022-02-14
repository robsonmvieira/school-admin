import { ReactNode } from "react"

export type FormProps = {
  children: ReactNode
  onSubmit: () => any
}
export default function Form({children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
     {children}
    </form>
  )
}