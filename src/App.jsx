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
import AdminAdd from './pages/Admin/AdminAdd'
import AdminEdit from './pages/Admin/AdminEdit'
import AdminDelete from './pages/Admin/AdminDelete'
import AdoptionStatus from './pages/Admin/AdoptionStatus'
import AdminPage from './pages/Admin/AdminPage'


//Added by -RM
import './css components/styles.css' // penso que isto é melhor por no main.jsx, que assim fica com o resto do css, o que achas?


function App() {

  return (
    <>
      <NavigationBar /> {/* PRovavavel ter de mudar para dentro das routes para funcionar */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />

          <Route path="/login" element={< Login />} /> {/* Done -RM */}
          <Route path="/register" element={< Register />} /> {/* Done -RM */}

          <Route path="/userprofile" element={< UserProfile />} /> {/* Done -RM */}
          <Route path="/personaldata" element={< PersonalData />} />

          <Route path="/ourpets" element={< AnimalSearch />} />
          <Route path="/animalpage/:id" element={< AnimalPage />} /> {/* Need to make route get single pet-RM */} {/* Done ;) -- B.F. */}
          <Route path="/adoptionform" element={< AdoptionForm />} />

          <Route path="/adminadd" element={< AdminAdd />} />
          <Route path="/adminedit" element={< AdminEdit />} />
          <Route path="/admindelete" element={< AdminDelete />} />
          <Route path="/adoptionstatus" element={< AdoptionStatus />} />
          <Route path="/adminpage" element={< AdminPage />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
