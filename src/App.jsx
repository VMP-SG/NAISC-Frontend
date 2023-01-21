import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/home/HomePage'
import FeedPage from './views/feed/FeedPage'
import CustomerPage from './views/customer/CustomerPage'
import { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
