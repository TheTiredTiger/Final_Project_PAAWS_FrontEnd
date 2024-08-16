import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import AnimalSearch from './pages/AnimalSearch'
import AnimalPage from './pages/AnimalPage'
import AdoptionForm from './pages/AdoptionForm'
import PersonalData from './pages/PersonalData'

function App() {

  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />

          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />

          <Route path="/userprofile" element={< UserProfile />} />
          <Route path="/personaldata" element={< PersonalData />} />

          <Route path="/ourpets" element={< AnimalSearch />} />
          <Route path="/animalpage" element={< AnimalPage />} />
          <Route path="/adoptionform" element={< AdoptionForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
