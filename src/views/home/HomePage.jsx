import React from 'react'
import Sidebar from '../../components/Sidebar'

const HomePage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <p>This is the home page.</p>
    </>
  )
}

export default HomePage
