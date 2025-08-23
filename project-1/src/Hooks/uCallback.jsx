import React, { memo, useCallback, useState } from 'react'


    const Button = memo(({children,onclick})=>{
    console.log("button triggerd",children);
    return(<button onClick={onclick}>{children}</button>)}
)

    export const UCallback = () => {

    const [number, setNumber] = useState(0)
    
//     const increment = ()=>{
//         setNumber(number+1);
//         console.log("inside increment");
//     }
//     const decrement = ()=>{
//         setNumber(number-1);
//         console.log("inside decrement");
// }
    
    const increment =useCallback(() => {
        setNumber(number+1)    
        console.log("inside increment");},[])
    const decrement =useCallback(() => {
        setNumber(number-1)    
        console.log("inside decrement");},[])
    

  return (
    <>
    <h1>useCallback()</h1>
     <Button onclick={increment}>Increment</Button>
     <span><h1>{number}</h1></span>
     <Button onclick={decrement}>Decrement</Button>
    </>
  )
}
