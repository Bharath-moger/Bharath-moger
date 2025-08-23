import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LandpageContent = ({name}) => {
    const navigate = useNavigate();
    console.log(name);
    
  return (
    <div className="landingpage-main-container">
          <h1 className="font-bold text-4xl" >Welcome {name}</h1>
          <h1 className="font-bold text-4xl text-red">Ready to test your frontend development skills?</h1>
          <p className="font-bold ">Each quiz contains 5-10 questions, you get 1 point for each correct answer, at the end of each quiz you get your total score.</p>
          <div className="html-css-js-container">
          <div className="quiz-card-container">
            <img id="html" src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
            <button onClick={()=>navigate("/html")} id="quiz-start-btn">GET STARTED {'>'}</button>
          </div>  
          <div className="quiz-card-container">
            <img id="css" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="" />
            <button onClick={()=>navigate("/css")} id="quiz-start-btn">GET STARTED {'>'}</button>
          </div>
          <div className="quiz-card-container">
           <img id="js" src="https://i.pinimg.com/736x/3d/ab/ec/3dabec65e34cd893e8d80420e6b7dc28.jpg" alt="" />
            <button onClick={()=>navigate("/js")} id="quiz-start-btn">GET STARTED {'>'}</button>
          </div>
          </div>
          <h1 className="font-bold text-4xl ">Let's Start. All The Best!!</h1>
        </div>
  )
}
