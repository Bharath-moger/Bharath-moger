import React, { createContext } from 'react'
export const MyContext = createContext()
export const MyContextProvider = ({ children }) => {
  const contextVar = "useContext hook";
  const num = 1;
  return (
    <MyContext.Provider value={{contextVar,num}}>{children}</MyContext.Provider>
  )
}