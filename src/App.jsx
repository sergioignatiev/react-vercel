import { useState } from 'react'


import './App.css'

function App() {
 
const [count,setCount]=useState('Sergio')
  return (
    <>
   <h1 onClick={()=>setCount("Sergio Ignatiev")}>REACT_VERCEL {count} *</h1>
    </>
  )
}

export default App
