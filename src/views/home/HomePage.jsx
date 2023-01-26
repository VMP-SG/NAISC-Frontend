import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'

const HomePage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const sse = new EventSource(import.meta.env.VITE_BACKEND_URL + "/test");
    sse.onmessage = (e) => {
      setData(e.data);
    }

    sse.onerror = () => {
      console.log("Error");
      sse.close();
    }

    return () => sse.close();
  },[])
  return (
    <>
      <div className='flex flex-row'>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <Card text="Heatmap"/>
      </div>
      <p>This is the home page.</p>
      <p>Data: {data}</p>
    </>
  )
}

export default HomePage