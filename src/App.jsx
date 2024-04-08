import { useState } from 'react'

import './App.css'
import Blue from "./components/Blue"
import Red from "./components/Red"
import { Routes, Route , Link } from "react-router-dom"

 
function App() {
  

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to ="/blue"><h1> BLUE</h1> </Link>
        <Link to ="/red"><h1> RED</h1> </Link>    {/* navigation here */}</div>
      <div id="main-section">
        
        <Routes>
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />

        </Routes>{/* routes here */}</div>

    </div>
    </>
  )
}

export default App
