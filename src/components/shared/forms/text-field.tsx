import { forwardRef, InputHTMLAttributes, ReactNode } from "react"

export type TextFieldProps = {
  icon?: ReactNode
  id: string
  containerClasses: string
  inputClasses: string
  type: 'text'| 'password' | 'number'| 'email'
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField:  React.ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {icon, id, containerClasses, inputClasses, type = 'text', placeholder = '', ...props }, ref) => {
    
      return (
        <div className={`${containerClasses}`}>
          {!!icon && icon}
          <input
            className={`${inputClasses}`} 
            id={id}
            type={type}
            placeholder={placeholder}
            {...props}
            ref={ref}
            />
        </div>
      )
}

export default forwardRef(TextField)
