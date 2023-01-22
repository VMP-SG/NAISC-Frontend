import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'

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
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <p>This is the home page.</p>
      <p>Data: {data}</p>
    </>
  )
}

export default HomePage
