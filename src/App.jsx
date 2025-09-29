import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0)

  AOS.init({
  duration: 1000, 
  once: true,     
});

  return (
    <>
      
    </>
  )
}

export default App
