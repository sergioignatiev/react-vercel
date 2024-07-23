import { useState } from 'react'
import About from './components/About'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.scss'
import Navigation from './components/Navigation'

function App() {
 
const [count,setCount]=useState('Sergio')
  return (
    <>
   
    <BrowserRouter>
    <Navigation/>
    <Routes>
<Route index element={<h1>HOME INDeX</h1>}/>
<Route path='/about' element={<About/>}/>

    </Routes>
    
    </BrowserRouter>
   <h1 onClick={()=>setCount("Sergio Ignatiev")}>REACT_VERCEL {count} *</h1>
    </>
  )
}

export default App
