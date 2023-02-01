import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import SeatTable from './SeatTable'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PopularStallCard from './PopularStallCard'

const CustomerPage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <div className='flex flex-col w-screen pl-40 pr-10 pt-12'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-4xl mb-5'>Customer Analytics</h1>
          <div className='flex gap-2 items-center'>
            <ChevronLeftIcon className='w-6 cursor-pointer' onClick={() => setPage(page => --page < 0 ? 2 : page)}/>
            <ChevronRightIcon className='w-6 cursor-pointer' onClick={() => setPage(page => ++page > 2 ? 0 : page)}/>
          </div>
        </div>
        {
          page % 3 === 0 ? <SeatTable /> : 
          page % 3 === 1 ? <PopularStallCard mode='Descending' /> : 
          <PopularStallCard mode='Ascending' />
        }
      </div>
    </>
  )
}

export default CustomerPage
