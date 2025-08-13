import React from 'react'

export function Event(props) {
    // const handleClick = (a) =>{
    //     return(alert(`"2nd Button clicked ${a}"`))
    // }
  return (
    <>
    {/* <button onClick={()=>{return(alert('1st button clicked'))}}>CLick</button> 
    <button onClick={()=>{handleClick("a")}}>CLick</button>
    <button onClick={handleClick}>click</button> */}

    {/* pass event as props */}
    
    <button onClick={props.onclick} >Button1</button> <br /> 
    <button onMouseEnter={props.onhover} >Button2</button> <br />
    
 

    </>
  )
}
