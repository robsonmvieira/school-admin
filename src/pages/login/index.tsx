import TextField from '../../components/shared/forms/text-field'

import { useForm } from 'react-hook-form'

import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Login () {
  const onSubmitHandler = (data: any) => console.log(data)
  const { register, handleSubmit } = useForm()
  const url = 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80'
  return (
    <div className="flex h-screen">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="w-1/2 bg-cover bg-no-repeat  bg-center"
      ></div>
      <div className='w-1/2 flex justify-center items-center bg-gray-100'>
        <div className="w-5/12 flex flex-col gap-x-8">
          <h1 className="text-5xl font-sans text-gray-900">Faça Login</h1>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
              <TextField
                containerClasses='mt-14 flex items-center bg-gray-200  rounded-lg px-4'
                inputClasses="h-11 w-full bg-gray-200 ml-4 outline-none"
                icon={<AiOutlineMail size={24} />}
                type="email"
                {...register('email')}
                id="email"
              />
              <TextField
                containerClasses='mt-10 flex items-center bg-gray-200  rounded-lg px-4'
                inputClasses="h-11 w-full bg-gray-200 ml-4 outline-none"
                icon={<RiLockPasswordLine size={28} />}
                type="password"
                {...register('password')}
                id="password"
              />

            <div className="flex flex-col justify-end items-end">
              <button className="py-3 px-6 bg-gray-900 hover:bg-gray-700 text-gray-300 rounded-lg mt-5 font-sans text-lg">
                Entrar
              </button>
              <a
                href="#"
                className="mt-3 text-gray-500 cursor-pointer hover:text-orange-600"
              >
                Esqueci minha senha
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
