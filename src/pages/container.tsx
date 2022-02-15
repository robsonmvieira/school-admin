import { ReactNode, useState } from "react"
import Menu from "../components/menu"
import ConfirmModal from "../components/shared/confirmModal";
import Sidebar from "../components/sidebar";

export type ContainerProps = {
  children: ReactNode
}
const Container = ({children}: ContainerProps) => {

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
          {children}
      </main>
    </div>
    {confirmationModalIsOpen && <ConfirmModal
      onExcludeItemHandler={onExcludeItemHandler}
      onHandlerCancel={() => setConfirmationModalIsOpen(false)} />}
  </div>
  )
}

export default Container
