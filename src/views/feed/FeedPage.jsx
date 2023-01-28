import React from 'react'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'


const FeedPage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <div className='flex w-screen pl-40 pr-10'>
        <Card title="Feed">
        </Card>
      </div>
    </>
  )
}

export default FeedPage
