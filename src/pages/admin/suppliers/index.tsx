import { NextPage } from 'next'
import { useState } from 'react'
import ConfirmModal from '../../../components/shared/confirmModal'
import Container from '../../container'
import CardReportList from '../cardReportList'
import TableSupplier from '../supplierTable'

const Suppliers: NextPage = () => {
  // const [userMenuOpen, setUserMenuOpen] = useState(false);
  // const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false)

  const onDeleteHandler = () => {
    setConfirmationModalIsOpen(!confirmationModalIsOpen)
  }

  const onExcludeItemHandler = () => {
    console.log('excluiu')
    setConfirmationModalIsOpen(false)
  }

  const onEditlHandler = () => {}
  const onMoreDetailHandler = () => {}
  return (
    <>
      <Container>
        <div className="flex flex-col ml-8 w-full mr-12 gap-y-16">
          <CardReportList />
          <TableSupplier
            onDeleteHandler={onDeleteHandler}
            onEditlHandler={onEditlHandler}
            onMoreDetailHandler={onMoreDetailHandler}
          />
        </div>
      </Container>
      {confirmationModalIsOpen && (
        <ConfirmModal
          onExcludeItemHandler={onExcludeItemHandler}
          onHandlerCancel={() => setConfirmationModalIsOpen(false)}
        />
      )}
    </>
  )
}

export default Suppliers
