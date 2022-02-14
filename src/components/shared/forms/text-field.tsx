import { InputHTMLAttributes, ReactNode } from "react"

export type TextFieldProps = {
  icon?: ReactNode
  id: string
  type: 'text'| 'password' | 'number'| 'email'
  register: any
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function TextField({ icon, id,  type = 'password', register, placeholder = '', ...props }: TextFieldProps) {
  return (
    <div>
      {!!icon && icon}
      <input 
        id={id}
        type={type}
        ref={register} 
        placeholder={placeholder}
        {...props}
        />
    </div>
  )
}