/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignUp from './pages/CaptainSignUp'
import { UserDataContext } from './context/UserContext'

const App = () => {
  const ans = useContext(UserDataContext)
  console.log(ans);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<Captainlogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      </Routes>
    </div>
  )
}

export default App