import './App.css'
import React from 'react'
import Home from './pages/home'
import Trending from './pages/trending'
import MoreReason from './pages/moreReason'
import Faq from './pages/faq'
import Footer from './pages/footer'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BrowserRouter as  Routers,Routes,Route } from 'react-router-dom'
import Signup from './pages/signup'
import Subscription from './pages/subscription'
import Payment from './pages/payment'


function App() {
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<>
//      <Home/>
//      <Trending/>
//      <MoreReason/>
//      <Faq/>
//      <Footer/>
//      </>
//   },
//   {
//     path:"/finish",
//     element:<Signup/>
//   }
// ]);

  return (
<Routers>
  <Routes>
  <Route path="/" element={<><Home/><Trending/><Faq/><Footer/> </>}/>
  <Route path="/finish" element={<Signup/>}/>
  <Route path="/plan" element={<Subscription/>} />
  <Route path='/payment' element={<Payment/>}/>
</Routes>
    </Routers>
    //  <RouterProvider router={router}/>

  )
}

export default App



// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Home from './pages/home'
// import Trending from './pages/trending'
// import MoreReason from './pages/moreReason'
// import Faq from './pages/faq'
// import Footer from './pages/footer'
// import Signup from './pages/signup'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Home />
//             <Trending />
//             <MoreReason />
//             <Faq />
//             <Footer />
//           </>
//         } />
//         <Route path="/finish" element={<Signup />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App
