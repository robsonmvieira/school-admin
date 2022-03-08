import { IoFilterSharp } from  'react-icons/io5';
import { CgMoreVerticalO } from 'react-icons/cg';
import { RiEditBoxLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { Category } from '../../../contexts/useAdmin';

export type TableProps = {
  onMoreDetailHandler: (id: string) => void
  onEditHandler: (id: string) => void
  onDeleteHandler: (id: string) => void
  list: Category[]
}


export default function CategoryTable({list, onDeleteHandler, onEditHandler, onMoreDetailHandler}: TableProps) {
  return (

    <div className="w-full bg-gray-900 p-6 rounded-lg">
    <div className="w-full flex justify-between">
      <span className="text-white font-sans font-semibold leading-loose text-xl">Categorias</span>
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
            <td className="py-4 border-b border-gray-700">Título</td>
            <td className="py-4 border-b border-gray-700 ">Status</td>
            <td className="py-4 border-b border-gray-700 text-center">Ações</td>
          </tr>
        </thead>
        <tbody>
          {list && list.map((category: Category) => (
            <tr key={category.id} className="text-sm">
               <td className="py-4">
                <span className="text-gray-500">{category.title}</span>
              </td>
                <td className="py-4 ">
                  <span className="flex justify-center py-1.5 rounded-full font-medium capitalize text-green-400 bg-green-400/20 w-24">Ativo</span>
              </td>
              <td>
              <div className='gap-x-6 flex mt-4 justify-center text-white'>
                <CgMoreVerticalO
                  onClick={() => onMoreDetailHandler(`${category.id}`)}
                  size={40}
                  className='rounded-full bg-green-400/20 p-2 text-green-400 cursor-pointer'/>
                <RiEditBoxLine
                  onClick={() => onEditHandler(`${category.id}`)}
                  size={40}
                  className='rounded-full bg-orange-400/20 p-2 text-orange-400 cursor-pointer'/>
                <AiOutlineDelete
                  onClick={() =>onDeleteHandler(`${category.id}`)}
                  size={40}
                  className='rounded-full bg-red-400/20 p-2 text-red-400 cursor-pointer'/>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}
