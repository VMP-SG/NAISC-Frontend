import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/home/HomePage'
import FeedPage from './views/feed/FeedPage'
import CustomerPage from './views/customer/CustomerPage'
import { useState, useEffect } from 'react'
import Logo from "./assets/Logo.svg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startAPI = async () => {
      console.log("starting api...");
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/startAPI");
        console.log(await response.text());
        console.log("api started");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }
    startAPI();

    const stopAPI = () => {
      fetch(import.meta.env.VITE_BACKEND_URL + "/stopAPI");
      alert("Stopping API...")
    }

    window.addEventListener("beforeunload", stopAPI);
    () => window.removeEventListener("beforeunload", stopAPI)
  },[]);

  if (loading) {
    return (
      <div className='w-screen h-screen flex items-center justify-center flex-col'>
        <img src={Logo} className='animate-spinner' />
        <h1 className='font-bold text-5xl'>Warming up API...</h1>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage open={sidebarOpen} onCloseSidebar={() => setSidebarOpen(false)} onOpenSidebar={() => setSidebarOpen(true)} />} />
        <Route path="/feed" element={<FeedPage open={sidebarOpen} onCloseSidebar={() => setSidebarOpen(false)} onOpenSidebar={() => setSidebarOpen(true)} />} />
        <Route path="/customer" element={<CustomerPage open={sidebarOpen} onCloseSidebar={() => setSidebarOpen(false)} onOpenSidebar={() => setSidebarOpen(true)} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
