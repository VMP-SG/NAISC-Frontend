import React, { useEffect, useState, useRef } from 'react'
import Dropdown from '../../components/Dropdown'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import LogoHome from '../../assets/LogoHome.png';

const options = ['Overall', 'Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E']

const HomePage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [data, setData] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  // useEffect(() => {
  //   const sse = new EventSource(import.meta.env.VITE_BACKEND_URL + "/test");
  //   sse.onmessage = (e) => {
  //     setData(e.data);
  //   }

  //   sse.onerror = () => {
  //     console.log("Error");
  //     sse.close();
  //   }

  //   return () => sse.close();
  // },[])
  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <div className='flex flex-col w-screen pl-40 pr-10 pt-12'>
        <img src={LogoHome} className='h-[45px] w-[310px] mb-7'/>
        <Card>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl">Heatmap</p>
            <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
        </Card>
      </div>
      {/* <p>This is the home page.</p> */}
      {/* <p>Data: {data}</p> */}
    </>
  )
}

export default HomePage
