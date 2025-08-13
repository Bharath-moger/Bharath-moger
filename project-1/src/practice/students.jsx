import React from 'react'

// export default function Students(props) 
export default function Students({data}) 
{
    // console.log(props);
    //destructure 
    // const {data} = props;
    // const { number,name,age,branch,roll} = props.data;
    const { number,name,age,branch,roll,img} = data;
  return (
     <li >
          {/* <h1>Student Details</h1> */}
          <h2 id='h2'>Student:{number}</h2>
          <h3>Name:{name}</h3>
          <h3>Age:{age}</h3>
          <h3>Branch:{branch}</h3>
          <h3>Roll NO:{roll}</h3>
          <h3>Student Image: </h3><img width={200} src= {img} alt="" /> 
          <br />
          <br />
          <br />
        </li>
  )
}
