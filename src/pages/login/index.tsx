

export default function Login() {
  const url = `https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80`
  return (
    <div className="flex h-screen" >
      <div style={{backgroundImage: `url(${url})`}} className="w-1/2 bg-cover bg-no-repeat  bg-center">
      </div>
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <div className="w-5/12 flex flex-col gap-x-8">
          <h1 className="text-5xl font-sans text-gray-900">Faça Login</h1>
          
          <div className="mt-14 flex flex-col">
            <span className="text-gray-900 text-lg mb-3">E-mail</span>
            <input type="text" className="h-11 rounded-lg pl-3 bg-gray-200 outline-none" placeholder="Digite seu e-mail"/>
          </div>

          <div className="mt-4 flex flex-col w-full">
            <span className="text-gray-900 text-lg mb-3">Senha</span>
            <input type="password" className="h-11 rounded-lg pl-3 bg-gray-200 outline-none" placeholder="Digite sua senha"/>
          </div>
          <div className="flex flex-col justify-end items-end">
            <button className="py-4 px-8 bg-gray-900 hover:bg-gray-700 text-gray-300 rounded-lg mt-5 font-sans text-lg">
              Entrar
            </button>
            <a href="#" className="mt-3 text-gray-500 cursor-pointer hover:text-orange-600">Esqueci minha senha</a>
          </div>
        </div>
      </div>

    </div>
  )
}