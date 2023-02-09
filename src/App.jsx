import React from 'react'
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  )
}

export default App
