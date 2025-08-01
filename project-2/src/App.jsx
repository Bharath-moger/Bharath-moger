import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './first/header'
import Second from './second/second'
import Third from './third/third'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='project-2-container'>
     <First/>
    <Second/>
    <Third/>
    </div>
  )
}

export default App
