import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import Dropdown from '../../components/Dropdown'

const options = ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"]

const FeedPage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <div className='flex flex-col w-screen pl-40 pr-10 pt-12'>
        <h1 className='font-bold text-4xl mb-5'>Live Operating Feed (Admin)</h1>
        <Card className='h-[80vh]'>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl">Feed</p>
            <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
          <img className='flex-1 mt-6 overflow-hidden object-cover' src={import.meta.env.VITE_BACKEND_URL + "/video"} alt="Live Feed" />
        </Card>
      </div>
    </>
  )
}

export default FeedPage
