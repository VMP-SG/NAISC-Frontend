import React, { useState } from 'react'
import Dropdown from '../../components/Dropdown'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import LogoHome from '../../assets/LogoHome.png';
import { UserIcon as UserIconOutline } from '@heroicons/react/24/outline';
import { UserIcon } from "@heroicons/react/24/solid";

const options = ['Overall', 'Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'];
const COUNT_PER_ICON = 10;

const HomePage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [data, setData] = useState("");
  const totalCount = 100;
  const zonalCount = 10;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const totalIcons = [];
  for (let i = 0; i < 30; i++) {
    if (i < totalCount / COUNT_PER_ICON) {
      totalIcons.push(<UserIcon className='w-4' key={i} />)
    } else {
      totalIcons.push(<UserIconOutline className='w-4' key={i} />)
    }
  }

  const zonalIcons = Array.from({ length: zonalCount / COUNT_PER_ICON }, (_, i) => <UserIcon fill='#6F6AF8' className='w-4' key={i} />).concat(totalIcons.slice(zonalCount / COUNT_PER_ICON))

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
      <div className='flex flex-col w-screen pl-40 pr-10 py-12'>
        <img src={LogoHome} className='h-[45px] w-[310px] mb-7'/>
        <Card className='w-full h-[70vh]'>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold text-2xl">Heatmap</h2>
            <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
        </Card>
        <div className='flex mt-10 gap-10'>
          <div>
            <Card>
              <h2 className="font-bold text-2xl">People Count</h2>
              <div className='grid grid-cols-10 gap-[6px] mt-4'>
                {totalIcons}
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <h1 className='text-5xl font-bold'>~{totalCount}</h1>
                <p className='text-2xl leading-7'>In <br />Total</p>
              </div>
            </Card>
            <Card className='mt-10'>
              <h2 className="font-bold text-2xl">People Count</h2>
              <div className='grid grid-cols-10 gap-[6px] mt-4'>
                {zonalIcons}
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <h1 className='text-5xl font-bold'>~{zonalCount}</h1>
                <p className='text-2xl leading-7'>In <br />Total</p>
              </div>
            </Card>
          </div>
          <Card className='w-full'>
            <h2 className='font-bold text-2xl'>People Count over the Past Day</h2>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage
