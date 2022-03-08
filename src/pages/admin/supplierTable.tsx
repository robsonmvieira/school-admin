import { IoFilterSharp } from  'react-icons/io5';
import { CgMoreVerticalO } from 'react-icons/cg';
import { RiEditBoxLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';

export type TableProps = {
  onMoreDetailHandler: () => void
  onEditlHandler: () => void
  onDeleteHandler: () => void
}


export default function TableSupplier({onDeleteHandler, onEditlHandler, onMoreDetailHandler}: TableProps) {
  return (

    <div className="w-full bg-gray-900 p-6 rounded-lg">
    <div className="w-full flex justify-between">
      <span className="text-white font-sans font-semibold leading-loose text-xl">Fornecedores</span>
      <div>
        <button className="flex justify-between items-center text-white font-medium cursor-pointer border-gray-700 border py-3 px-4 gap-x-2.5 rounded-lg">
          <IoFilterSharp size={20} className='text-white' />
          Filtros
        </button>
      </div>
    </div>
    <table className="w-full">
        <thead>
          <tr className="text-white font-semibold text-sm">
            <td className="py-4 border-b border-gray-700">Fornecedor</td>
            <td className="py-4 border-b border-gray-700">Código</td>
            <td className="py-4 border-b border-gray-700">E-Mail</td>
            <td className="py-4 border-b border-gray-700">Telefone</td>
            <td className="py-4 border-b border-gray-700">Segmento</td>
            <td className="py-4 border-b border-gray-700 ">Status</td>
            <td className="py-4 border-b border-gray-700 ">Cadastro</td>
            <td className="py-4 border-b border-gray-700 text-center">Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm">
            <td className="py-4">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-400 font-semibold">
                    ML
                </div>
                <span className="text-gray-500">Morais Livros</span>
              </div>
            </td>

            <td className="py-4">
                <span className="text-gray-500">245R45-4</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">morailslivros@contato.com</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">21 4632-4856 </span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">Material Pedagógico</span>
            </td>

            <td className="py-4">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-green-400 bg-green-400/20 w-24">Regular</span>
            </td>

            <td className="py-4 ">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-green-400 bg-green-400/20 w-24">Ativo</span>
            </td>

            <td>
              <div className='gap-x-6 flex text-white'>
                <CgMoreVerticalO
                  onClick={onMoreDetailHandler}
                  size={40}
                  className='rounded-full bg-green-400/20 p-2 text-green-400 cursor-pointer'/>
                <RiEditBoxLine
                  onClick={onEditlHandler}
                  size={40}
                  className='rounded-full bg-orange-400/20 p-2 text-orange-400 cursor-pointer'/>
                <AiOutlineDelete
                  onClick={onDeleteHandler}
                  size={40}
                  className='rounded-full bg-red-400/20 p-2 text-red-400 cursor-pointer'/>
              </div>
            </td>
          </tr>

          <tr className="text-sm">
            <td className="py-4">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-400 font-semibold">
                    SC
                </div>
                <span className="text-gray-500">Sonho de crianças Cantina</span>
              </div>
            </td>

            <td className="py-4">
                <span className="text-gray-500">004W56-9</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">sonhodecrianca@contato.com.br</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">21 97845-6231 </span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">Alimentação infantil</span>
            </td>

            <td className="py-4">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-orange-400 bg-orange-400/20 w-24">Pendente</span>
            </td>

            <td className="py-4 ">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-orange-400 bg-orange-400/20 w-24">Pendente</span>
            </td>


            <td>
              <div className='gap-x-6 flex text-white'>
                <CgMoreVerticalO
                  onClick={onMoreDetailHandler}
                  size={40}
                  className='rounded-full bg-green-400/20 p-2 text-green-400 cursor-pointer'/>
                <RiEditBoxLine
                  onClick={onEditlHandler}
                  size={40}
                  className='rounded-full bg-orange-400/20 p-2 text-orange-400 cursor-pointer'/>
                <AiOutlineDelete
                  onClick={onDeleteHandler}
                  size={40}
                  className='rounded-full bg-red-400/20 p-2 text-red-400 cursor-pointer'/>
              </div>
            </td>
          </tr>

          <tr className="text-sm">
            <td className="py-4">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-400 font-semibold">
                    TT
                </div>
                <span className="text-gray-500">Tele supplier</span>
              </div>
            </td>

            <td className="py-4">
                <span className="text-gray-500">00432-9</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">telesupplier@ts.com.br</span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">11 27458651 </span>
            </td>

            <td className="py-4">
                <span className="text-gray-500">Suporte tecnológico </span>
            </td>

            <td className="py-4">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-red-400 bg-red-400/20 w-24">Bloqueado</span>
            </td>

            <td className="py-4 ">
                <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-red-400 bg-red-400/20 w-24">Irregular</span>
            </td>


            <td>
              <div className='gap-x-6 flex text-white'>
                <CgMoreVerticalO
                  onClick={onMoreDetailHandler}
                  size={40}
                  className='rounded-full bg-green-400/20 p-2 text-green-400 cursor-pointer'/>
                <RiEditBoxLine
                  onClick={onEditlHandler}
                  size={40}
                  className='rounded-full bg-orange-400/20 p-2 text-orange-400 cursor-pointer'/>
                <AiOutlineDelete
                  onClick={onDeleteHandler}
                  size={40}
                  className='rounded-full bg-red-400/20 p-2 text-red-400 cursor-pointer'/>
              </div>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
  )
}
