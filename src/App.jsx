import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar';
import Hero from './component/Hero ';
import OurServices from './component/OurServices';

function App() {
  const [count, setCount] = useState(0)

  AOS.init({
  duration: 1000, 
  once: true,     
});

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <OurServices></OurServices>
      
    </>
  )
}

export default App
