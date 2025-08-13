import React, { useEffect, useState } from 'react'

export const UEffect = () => {
    const [width, setWidth] = useState(window.screen.width)
    
    const handleResize = ()=>{
     setWidth(window.innerWidth);
     
    }
    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        return()=>{
            window.removeEventListener("resize",handleResize)
        }
    })

  return (
    <>
    <p>current screen width is {width}</p>
    </>
  )
}
