
import { TiDelete  } from 'react-icons/ti';

export type ConfirmModalProps = {
  onHandlerCancel: () => void
  onExcludeItemHandler: () => void
}


export default function ConfirmModal({ onHandlerCancel, onExcludeItemHandler }: ConfirmModalProps) {
  return (
    <div className="flex absolute justify-center items-center bg-gray-800/60 inset-0">
        <div className="w-1/4 bg-gray-900 rounded-xl gap-x-4">
          <div className="border-b-2 border-gray-400 flex justify-between py-4 px-6">
            <span className="text-gray-300 font-sans  text-lg">Confirmação de Exclusão</span>
            <div>
              <TiDelete 
                onClick={onHandlerCancel}
                size={28} className='text-white cursor-pointer' />
            </div>
          </div>
          <div className="py-4 px-6">
              <span className="text-gray-300 text-2xl">Tem certeza que deseja excluir esse item ?</span>
          </div>
          <div className="flex justify-end py-4 px-6 gap-x-4">
            <button 
              onClick={onHandlerCancel}
              className="text-gray-300 font-medium py-4 px-6 rounded-lg bg-gray-600 hover:bg-gray-700">
                Cancelar
            </button>
            <button
              onClick={onExcludeItemHandler}
              className="font-medium py-4 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl">
                Excluir
            </button>
          </div>
        </div>
      </div>
  )
}