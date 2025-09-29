import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar';

function App() {
  const [count, setCount] = useState(0)

  AOS.init({
  duration: 1000, 
  once: true,     
});

  return (
    <>
    <Navbar></Navbar>
      
    </>
  )
}

export default App
