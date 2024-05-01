import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Hero2 from './components/Hero2'
import Testimonials from './components/Testimonials'
import Message from './components/Message'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Hero2/>
      <Testimonials/>
      <Message/>
      <Footer/>
    </>
  )
}

export default App
