import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './views/home/HomePage'
import FeedPage from './views/feed/FeedPage'
import CustomerPage from './views/customer/CustomerPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/feed" element={<FeedPage />}/>
        <Route path="/customer" element={<CustomerPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
