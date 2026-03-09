import { useState, useEffect } from 'react'
import './App.css'
import Nav from './componets/nav'
import Hero from './componets/Hero'
import Problems from './componets/Problems'
import Download from './componets/Download'
import Footer from './componets/Footer'

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
