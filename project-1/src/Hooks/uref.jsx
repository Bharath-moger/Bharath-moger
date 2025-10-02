// import React, { memo, useEffect, useRef, useState } from 'react'

// export const Uref = memo( ({data}) => {

//     //FIRST USE OF REF HOOK IS TO CRETE MUTABLE VARIABLE
//     const [input, setiInput] = useState("");
//     const refVariable = useRef(0);
//     // const [count, setCount] = useState(0)
//     // console.log(refVariable);

//     // useEffect(()=>{setCount(count+1)},[input])
//     useEffect(() => {refVariable.current = refVariable.current + 1;})
//     // console.log(refVariable);

//     //SECOND USE IS TO ACCESS THE DOM ELEMENT WITHOUT DOCUMNET. OR WINDOW 
//     const myInput = useRef();
//     const handleClick = ()=>{
//         // console.log(myInput.current);
//         myInput.current.style.width = "300px";
//         // myInput.current.style.border = "2px solid red";
//         myInput.current.focus()
        
//     }
    
//         console.log("page rendered");
//     return (
//         <>
//             <h1>useRef()</h1>
//             <input type="text" onChange={(e) =>{setiInput(e.target.value) }} />
//             <h2>input is: {input}</h2>
//             {/* <h2>page rendered:{count}</h2> */}
//             <h2>page rendered:{refVariable.current}</h2>
//             <p>BioData: {data.name} {data.age} years old</p>
//             <input type="text" ref={myInput} /> <br />
//             <button onClick={handleClick}>click</button>       
//             </>
//     )
// }
// )

import React, { useRef } from 'react'
import { memo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Uref = memo(() => {
const [input, setInput] = useState("")

    //ceating mutable variable
    const countVar =  useRef(0);
    const PrevValue = useRef(0)
    useEffect(()=>{
    countVar.current = countVar.current+1;
    },[input])


    useEffect(()=>{ //just used to store the previous value of counter value it is mostly used to store the previous value of state variable
    PrevValue.current = countVar.current-1
    },[input])
    
    //accessing dom element
    const inputVal = useRef()
    const handleInput=()=>{
        console.log("button clicked")
        inputVal.current.focus()
        inputVal.current.style.width = "400px";
    }
    console.log(countVar.current);

    //uncontrolled form handling
    const refName = useRef(null) //i want to print name when submit so chaanging value from null to ""
    const refPassword = useRef(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(refName.current.value)
        console.log(refPassword.current.value)
        alert(`Name: ${refName.current.value}, Password: ${refPassword.current.value}`); //i acn't print ref variable directly
    }
    
  return (
      <div>
    <h1>Uref()</h1>
    <input type="text" ref={inputVal} onChange={(e)=>setInput(e.target.value)} /><br />
    <button onClick={handleInput}>click</button>
    <h4>uRef counter:{countVar.current}</h4>
    <h4>input is:{input}</h4>
    <h4>previous value:{PrevValue.current}</h4>
    <form action="" onSubmit={handleSubmit}>
        <input type="text"  ref={refName}/><br />
        <input type="password" ref={refPassword}/><br />
        <button type="submit">submit</button>
    </form>
    
    </div>
  )
})
