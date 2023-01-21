import React from 'react'
import Sidebar from '../../components/Sidebar'

const CustomerPage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <p>This is the customer page.</p>
    </>
  )
}

export default CustomerPage
