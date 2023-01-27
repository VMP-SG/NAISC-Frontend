import React from 'react'
import LogoSidebar from "../assets/LogoSidebar.png";
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, CameraIcon, ChartBarIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import { NavLink } from 'react-router-dom';

const Sidebar = ({ open, onClose, onOpen }) => {
  return (
    <div className={`h-screen p-10 fixed ${open ? "bg-white bg-opacity-70" : ""}`}>
      <div className={`${open ? "w-[236px]" : "w-[92px]"} transition-all duration-300 h-full relative`}>
        <div className='bg-white flex justify-center items-center rounded-full w-6 h-6 absolute right-0 top-10 shadow-md cursor-pointer z-20'>
          {
            open ? 
            <ChevronLeftIcon className="stroke-purple w-4" strokeWidth={2} onClick={onClose} /> :
            <ChevronRightIcon className="stroke-purple w-4" strokeWidth={2} onClick={onOpen} />
          }
        </div>
        <div className={`${open ? "w-56" : "w-20"} transition-all duration-300 bg-purple h-full rounded-xl pl-3 pt-8`}>
          <img src={LogoSidebar} alt="Hawk-Eye Centre" className={`h-10 ${open ? "" : "invisible"}`} />
          <div className='pt-7 flex flex-col gap-2'>
            <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-white active" : "z-10"} group w-full h-12 rounded-l-[20px] pl-5 items-center flex gap-6 relative z-10`}>
              <div className='hidden absolute group-[.active]:block -top-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-br-[20px]' />
              <div className='hidden absolute group-[.active]:block -bottom-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-tr-[20px]' />
              <HomeIcon className='group-[.active]:stroke-purple stroke-white min-w-[24px] w-6' />
              <p className='text-lg text-white group-[.active]:text-purple whitespace-nowrap overflow-hidden'>Home</p>
            </NavLink>
            <NavLink to="/feed" className={({ isActive }) => `${isActive ? "bg-white active" : "z-10"} group w-full h-12 rounded-l-[20px] pl-5 items-center flex gap-6 relative`}>
              <div className='hidden absolute group-[.active]:block -top-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-br-[20px]' />
              <div className='hidden absolute group-[.active]:block -bottom-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-tr-[20px]' />
              <CameraIcon className='group-[.active]:stroke-purple stroke-white min-w-[24px] w-6' />
              <p className='text-lg text-white group-[.active]:text-purple whitespace-nowrap overflow-hidden'>Live Feed</p>
            </NavLink>
            <NavLink to="/customer" className={({ isActive }) => `${isActive ? "bg-white active" : "z-10"} group w-full h-12 rounded-l-[20px] pl-5 items-center flex gap-6 relative`}>
              <div className='hidden absolute group-[.active]:block -top-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-br-[20px]' />
              <div className='hidden absolute group-[.active]:block -bottom-10 bg-white w-full right-0 h-10 before:bg-purple before:w-full before:h-10 before:absolute before:rounded-tr-[20px]' />
              <ChartBarIcon className='group-[.active]:stroke-purple stroke-white min-w-[24px] w-6' />
              <p className='text-lg text-white group-[.active]:text-purple whitespace-nowrap overflow-hidden'>Analytics</p>
            </NavLink>
            <a href="https://github.com/VMP-SG" target="_blank" rel="noreferrer noopener" className='group w-full h-12 rounded-l-[20px] pl-5 items-center flex gap-6 relative flex z-10'>
              <QuestionMarkCircleIcon className='stroke-white min-w-[24px] w-6' />
              <p className='text-lg text-white whitespace-nowrap overflow-hidden'>How It Works</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
