import React, { useState } from 'react'

export default function FormHandling() {
//NOT GOOD WAY OF FORM HANDLING HARD way
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleChange = (evt) => {

  //   //all are executed same time so we need to apply condition
  //   switch (evt.target.name) {
  //     case "name":
  //       setName(evt.target.value);
  //       break;
  //     case "email":
  //       setEmail(evt.target.value);
  //       break;
  //     case "password":
  //       setPassword(evt.target.value);
  //       break;
  //     }
      
      
  // }

  // const handleSubmit =(evt)=>{
  //   evt.preventDefault();  
  //   const formData = {
  //       name,
  //       email,
  //       password  //key and value name both are same
  //     }
  //     console.log(formData);
  // }


  // return (
  //   <>
  //     <form action="" onSubmit={handleSubmit}>
  //       <label htmlFor="name">Name</label>
  //       <input type="text" name="name" id="name" value={name} onChange={handleChange} required />
  //       <label htmlFor="email">email</label>
  //       <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
  //       <label htmlFor="password">password</label>
  //       <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
  //       <button type="submit">submit</button>
  //       <p>name is <strong>{name}</strong> email is <strong>{email}</strong> password is <strong>{password}</strong></p>
  //     </form>
  //   </>
  // )

  //

  //Shortcut to handle above hard way

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  

  // const handleSubmit =(evt)=>{
  //   evt.preventDefault();
  //   const formData = {
  //       name,
  //       email,
  //       password  //key and value name both are same
  //     }
  //     console.log(formData);
  // }


  // return (
  //   <>
  //     <form action="" onSubmit={handleSubmit}>
  //       <label htmlFor="name">Name</label>
  //       <input type="text" name="name" id="name" value={name} onChange={(evt)=>{setName(evt.target.value)}} required />
  //       <label htmlFor="email">email</label>
  //       <input type="email" name="email" id="email" value={email} onChange={(evt)=>{setEmail(evt.target.value)}} required />
  //       <label htmlFor="password">password</label>
  //       <input type="password" name="password" id="password" value={password} onChange={(evt)=>{setPassword(evt.target.value)}} required />
  //       <button type="submit">submit</button>
  //       <p>name is <strong>{name}</strong> email is <strong>{email}</strong> password is <strong>{password}</strong></p>
  //     </form>
  //   </>
  // )

  
  let formUser = {
    name:"",
    email:"",
    password:""
  }
  
  const [user, setUser] = useState(formUser)
  const {name,email,password} = user
  const handleChange = (evt) => {
    const {name,value} = evt.target
   setUser((prev)=>({...prev,[name]:value})
   )
      
      
  }

  const handleSubmit =(evt)=>{
    evt.preventDefault();
    const formData = {
        name:user.name,//already destructured
        email,
        password  //key and value name both are same
      }
      console.log(formData);
  }


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} required />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChange} required />
        <button type="submit">submit</button>
        <p>name is <strong>{name}</strong> email is <strong>{email}</strong> password is <strong>{password}</strong></p>
      </form>
    </>
  )

  

}
