import { useState } from "react";
import Menu from "../../components/menu";
import Sidebar from "../../components/sidebar";

import CardReportList from "./cardReportList";
import TableSupplier from "./supplierTable";

import { TiDelete  } from 'react-icons/ti';

export default function Index() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);


  const onDeleteHandler = () => {
    setConfirmationModalIsOpen(!confirmationModalIsOpen)
  }

  const onExcludeItemHandler = () =>  {
    console.log('excluiu');
    setConfirmationModalIsOpen(false)
  }

  const onEditlHandler = () => {}
  const onMoreDetailHandler= () => {}

  return (
    <div className="relative">
      <div className="flex flex-col bg-gray-800">
        <Menu
          onUserAvatarHandler={() => setIsSideBarOpened(!isSideBarOpened)}
          menuIsOpen={isSideBarOpened}
          onMenuHandler={() => setUserMenuOpen(!userMenuOpen)}
        />
        <main className="bg-gray-800 flex-grow flex">
          <Sidebar isSideBarOpened={userMenuOpen} />

          <div className="flex flex-col ml-8 w-full mr-12 gap-y-16">
            <CardReportList />
            <TableSupplier 
              onDeleteHandler={onDeleteHandler}
              onEditlHandler={onEditlHandler} 
              onMoreDetailHandler={onMoreDetailHandler} />
          </div>
        </main>
      </div>
      {confirmationModalIsOpen && <div className="flex absolute justify-center items-center bg-gray-800/60 inset-0">
        <div className="w-1/4 bg-gray-900 rounded-xl gap-x-4">
          <div className="border-b-2 border-gray-400 flex justify-between py-4 px-6">
            <span className="text-gray-300 font-sans  text-lg">Confirmação de Exclusão</span>
            <div>
              <TiDelete 
                onClick={() => setConfirmationModalIsOpen(false)}
                size={28} className='text-white cursor-pointer' />
            </div>
          </div>
          <div className="py-4 px-6">
              <span className="text-gray-300 text-2xl">Tem certeza que deseja excluir esse item ?</span>
          </div>
          <div className="flex justify-end py-4 px-6 gap-x-4">
            <button 
              onClick={() => setConfirmationModalIsOpen(false)}
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
      </div>}
    </div>
  );
}
