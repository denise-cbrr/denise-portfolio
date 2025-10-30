import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="about">
        <div className="picture">
          <img src="headshot.png" alt="headshot" />
        </div>
        <div className="info">
          <div className="main">
            <h1 className="name">Denise Pawleen Cabrera</h1>
            <h1 className="pronouns">(she/her)</h1>
          </div>
          <div className="tags">
            <p className='tags'>Wai'anae, HI</p>
            <p className='tags'>PM '28</p>
          </div>
          <div className="bio">
            <p>I am a sophomore at Yale College studying Computer Science. I'm a part of Kasama: The Filipinx Club at Yale and the Pitches&Tones Acapella Group.
              Some of my hobbies include photography, videography, and music. 
            </p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
