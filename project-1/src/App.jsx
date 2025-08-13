// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import First from './first/first'
// import Second from './second/second'
// import Third from './third/third'
// import Prcatice from './practice/practice'
// import Details from './Props/props'
// import Practice1 from './practice/practice1'
// import ES6 from './ES6/ES6'
// import { ES6 } from './ES6/ES6'
// import { Event } from './EventHandling/event'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from "./router/about"
import Contact from "./router/contact"
import Home from "./router/home"
import User from "./router/user"
import Error from "./router/error"
import Layout from "./router/layout"
import Button from './router/button'
import State from './state'
import Header from './router/header'
import Footer from './router/footer'
import FormHandling from './FormHandling'
import FAQ from './netflixfaq'
import UseEffect from './useEffect'
import Hooks from './Hooks/Hooks'


const ExportVariable ="Exporting..."
export{ExportVariable}

// export const firstContext = createContext();

function App() {

// const data={
//   name:"sudeep",
//   sname:"patgar",
//   fname:"sudeep patgar"
// }
// const data=[1,2,3,4,5]

// writing function to pass as props to event.jsx
// const click =()=>{
//   console.log("button 1 clicked");
//     alert("you clicked buttton 1")
  
// }
// const hover =()=>{
  
//     console.log("button 2 hoverd");
//     alert("you hoverd buttton 2")
    
    
// }

//router 1st
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//     path:"/",
//     element:<Home />,
//     errorElement:<Error/>
//   },
//   {
//     path:"/about",
//     element:<About />
//   },
//   {
//     path:"/user",
//     element:<User />
//   },
//   {
//     path:"/contact",
//     element:<Contact />
//   },
//   {
//     path:"/button",
//     element:<Button/>
//   }
//     ]
//   }
// ]);

  return (
    // <h1>hello</h1>
    
    // <div className='main-container'>
    //   {/* <First/>
    // <Second/>
    //   <Third/> */}
    //   {/* <Prcatice/> */}
    //   {/* <Details Car={data}/> */}
    //   {/* <Practice1/> */}
    //   {/* <ES6/> */}
    //   <Event onclick={click} onhover={hover} />
    // </div>
    <>
    {/* <RouterProvider router={router}/> */}
    {/* <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/effect' element={<UseEffect/>} />
        <Route path='/FormHandling' element={<FormHandling/>}/>
        <Route path='/netflix' element={<FAQ/>}/>
        
      </Routes>
      <Footer/>
    </Router> */}


      <Hooks/>

    
    
    </>
  )
}

export default App
// function App() {
//   let i=1;
  
//   const [number, setNo] = useState(i);

//   return (<div><h1>{number}</h1>
//   <button onClick={()=>{setNo(number)=i++}}>click me</button>
//   <button onClick={()=>{setNo(number)=i}}>click me</button></div>
//   )
// }
// export default App