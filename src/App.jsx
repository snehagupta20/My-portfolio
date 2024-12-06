import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/molecules/Sidebar'
import Home from './components/molecules/Home'
import { useScroll, useSpring, motion } from "framer-motion";


function App() {

  return (
    <>
      <Sidebar></Sidebar>
      <Home></Home>
    </>
  )
}

export default App
