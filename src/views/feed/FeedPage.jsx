import React from 'react'
import Sidebar from '../../components/Sidebar'

const FeedPage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <p>This is the feed page.</p>
    </>
  )
}

export default FeedPage
