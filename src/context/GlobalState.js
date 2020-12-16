import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions:  [
    {id:1, text: 'Flower', amount: -20},
    {id:2, text: 'Salary', amount: 300},
    {id:3, text: 'Book', amount: -10},
    {id:4, text: 'Camera', amount: 150}
  ]
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  //AppReducer is our switch statement that runs our state functions ex.: 
  //function abc(){dispatch({type: <this is where the case goes like increment or decrement>})}
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </GlobalContext.Provider>
  )
}