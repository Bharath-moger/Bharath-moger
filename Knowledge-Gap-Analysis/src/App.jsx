import React from "react"
import LandingPage from "./Pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Htmlquiz  from "./Pages/htmlquiz";
import  JsQuiz  from "./Pages/JsQuiz";
import  CssQuiz  from "./Pages/CssQuiz";
import { LandpageContent } from "./components/LandpageContent";

function App() {
return (
    // <>
    //   <LandingPage/>
    // </>
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/html" element={<Htmlquiz/>}/>
      <Route path="/css" element={<CssQuiz/>}/>
      <Route path="/js" element={<JsQuiz/>}/>
      <Route path="/landContent" element={<LandpageContent/>}/>
    </Routes>
    </Router>
  )
}

export default App


