import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './first/first'
import Second from './second/second'
import Third from './third/third'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <First/>
    <Second/>
      <Third/>
    </div>
    
  )
}

export default App
// function App() {
//   let i=1;
  
//   const [number, setNo] = useState(i);

//   return (<div><h1>{number}</h1>
//   <button onClick={()=>{setNo(i++)}}>click me</button>
//   <button onClick={()=>{setNo(i--)}}>click me</button></div>
//   )
// }
// export default App