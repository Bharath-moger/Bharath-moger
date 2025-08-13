import React, { createContext } from 'react'

const MyUserContext = createContext();

const UserContextprovider = ({children}) => {
const obj = {
    name:"ram",
    age:20
};

  return (
    <MyUserContext.Provider value={obj}>
        {children}
    </MyUserContext.Provider>
  )
}
export {MyUserContext,UserContextprovider}