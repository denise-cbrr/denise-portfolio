import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/about'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/ >
      <h1 className="diff-title" id='about'>Who Am I?</h1>
      <About/ >
      <h1 className="title" id='projects'>My Projects</h1>
      <Projects/ >
    </>
  )
}

export default App
