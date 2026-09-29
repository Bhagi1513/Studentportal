import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter,Route,Routes,Link } from 'react-router'
import Home from "./components/Home"
import Courses from "./components/Courses"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Profile from './components/Profile'
import Settings from './components/Settings'
import CourseDetails from './components/Coursedetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>  <Navbar />
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path="/Courses" element={<Courses />}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/dashboard/profile" element={<Profile />} />
    <Route path="/dashboard/settings" element={<Settings />} />
   <Route
  path="/courses/:courseId"
  element={<CourseDetails />}
/>
      </Routes>
      </BrowserRouter>
   
   
    </>
  )
}

export default App
