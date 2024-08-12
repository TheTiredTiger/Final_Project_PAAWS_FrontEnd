import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/profile" element={< UserProfile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
