import React from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
