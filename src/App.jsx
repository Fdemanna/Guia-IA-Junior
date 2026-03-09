import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/nav'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
useEffect (() => {

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    }),
    { threshold: 0.07, rootMargin: '0px 0px -28px 0px' }
  )
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

},[])
  return (
    <>
    <Nav />
    <Hero/>
    <Problems/>
    <Download/>
    <Footer/>   
  </>
  )
}

export default App
