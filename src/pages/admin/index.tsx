import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Menu from "../../components/menu";
import Sidebar from "../../components/sidebar";

import CardReportList from "./cardReportList";
import TableSupplier from "./supplierTable";

import ConfirmModal from "../../components/shared/confirmModal";

export default function Index() {
  const router = useRouter()
  useEffect(() => {
    if(router.route === '/admin') {
      router.push('admin/suppliers')
    }

  }, [])

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
      {confirmationModalIsOpen && <ConfirmModal
        onExcludeItemHandler={onExcludeItemHandler}
        onHandlerCancel={() => setConfirmationModalIsOpen(false)} />}
    </div>
  );
}
