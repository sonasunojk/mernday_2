import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import Tab from './components/Tab'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Rav from './components/Rav'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>WELCOME</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/rav" element={<Rav />} />
        <Route path="/api" element={<Api />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      

    
    </>
  )
}

export default App
