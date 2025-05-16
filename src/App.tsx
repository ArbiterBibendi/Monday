import { useState } from 'react'
import mondayText from "./assets/monday.js";
import './App.css'

function App() {

  return (
    <>
    {
      mondayText.map((text) => {
        return <h1>{text}</h1>
      })
    }
    </>
  )
}

export default App
