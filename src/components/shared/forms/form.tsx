import { ReactNode } from "react"
import { useForm } from "react-hook-form";

export type FormProps = {
  children: ReactNode
  onSubmit: (val: any) => void
}
export default function Form({children, onSubmit }: FormProps) {
  const { handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     {children}
    </form>
  )
}