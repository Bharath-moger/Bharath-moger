import React from 'react'
import studentdb from '../api/studentdb.json'
import './practice.css'

import Students from './students'
function Practice1() {


  return (
    <>
     <ul id='ul'>
        {studentdb.map((std)=>{
     return(
       <Students data={std} key={std.number} />
       )
    })}
      </ul>

    </>
  )
//  console.log(data);
 
}

export default Practice1