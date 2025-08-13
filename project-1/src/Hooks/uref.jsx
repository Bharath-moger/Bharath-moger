import React, { memo, useEffect, useRef, useState } from 'react'

export const Uref = memo( () => {

    //FIRST USE OF REF HOOK IS TO CRETE MUTABLE VARIABLE
    const [input, setiInput] = useState("");
    const refVariable = useRef(0);
    // const [count, setCount] = useState(0)
    // console.log(refVariable);

    // useEffect(()=>{setCount(count+1)},[input])
    useEffect(() => {refVariable.current = refVariable.current + 1;})
    // console.log(refVariable);

    //SECOND USE IS TO ACCESS THE DOM ELEMENT WITHOUT DOCUMNET. OR WINDOW 
    const myInput = useRef();
    const handleClick = ()=>{
        // console.log(myInput.current);
        myInput.current.style.width = "300px";
        // myInput.current.style.border = "2px solid red";
        myInput.current.focus()
    }
    return (
        <>
            <h1>useRef()</h1>
            <input type="text" onChange={(e) =>{setiInput(e.target.value) }} />
            <h2>input is: {input}</h2>
            {/* <h2>page rendered:{count}</h2> */}
            <h2>page rendered:{refVariable.current}</h2>

            <input type="text" ref={myInput} /> <br />
            <button onClick={handleClick}>click</button>       
            </>
    )
}
)