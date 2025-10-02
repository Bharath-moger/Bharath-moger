import React, { memo, useCallback, useState } from 'react'


    const Button = memo(({children,onclick})=>{
    console.log("button triggerd",children);
    return(<button onClick={onclick}>{children}</button>)})

    const ChildComponent = memo((props) =>{
        console.log("child component");
        return (
            props.function()
        )
    })

    export const UCallback = () => {

    const [number, setNumber] = useState(0)
    
    // const increment = ()=>{
    //     setNumber(number+1);
    //     console.log("inside increment");
    // }
//     const decrement = ()=>{
//         setNumber(number-1);
//         console.log("inside decrement");
// }
    
    const increment =useCallback(() => {
        setNumber(prev => prev+1)    
        console.log("inside increment");},[])
    const decrement =useCallback(() => {
        setNumber(prev => prev-1)    
        console.log("inside decrement");},[]) 

    // const myFunction = () =>{
    //     console.log("Hello this is my function")
    // }
    const myFunction =useCallback(()=>{
        console.log("Hello this is my function")
    },[])

  return (
    <>
    <h1>useCallback()</h1>
     <Button onclick={increment}>Increment</Button>
     <span><h1>{number}</h1></span>
     <Button onclick={decrement}>Decrement</Button><br /><br />
     <ChildComponent function={myFunction}/>
     
    </>
  )
}
