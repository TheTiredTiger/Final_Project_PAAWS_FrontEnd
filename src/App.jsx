import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPass from './pages/ResetPass'
import UserProfile from './pages/UserProfile'
import AnimalSearch from './pages/AnimalSearch'
import AnimalPage from './pages/AnimalPage'
import AdoptionForm from './pages/AdoptionForm'
import PersonalData from './pages/PersonalData'
import AdminAdd from './pages/Admin/AdminAdd'
import AdminEdit from './pages/Admin/AdminEdit'
import AdminDelete from './pages/Admin/AdminDelete'
import AdminPage from './pages/Admin/AdminPage'
import AdoptionStatus from './pages/Admin/AdoptionStatus'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={< Home />} />

          <Route path="/login" element={< Login />} /> {/* Done -RM */}
          <Route path="/register" element={< Register />} /> {/* Done -RM */}
          <Route path="/resetpass" element={< ResetPass />} />

          <Route path="/userprofile" element={< UserProfile />} /> {/* Done -RM */}
          <Route path="/personaldata" element={< PersonalData />} />

          <Route path="/ourpets" element={< AnimalSearch />} />
          <Route path="/animalpage/:id" element={< AnimalPage />} /> {/* Need to make route get single pet-RM */}
          {/* Route is done - BM */}
          <Route path="/adoptionform/:id" element={< AdoptionForm />} />

          <Route path="/adminadd" element={< AdminAdd />} />
          <Route path="/adminedit" element={< AdminEdit />} />
          <Route path="/admindelete" element={< AdminDelete />} />
          <Route path="/adoptionstatus" element={< AdoptionStatus />} />
          <Route path="/adminpage" element={< AdminPage />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
