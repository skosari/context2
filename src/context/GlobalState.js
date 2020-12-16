import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions:  []
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  //AppReducer is our switch statement that runs our state functions ex.: 
  //A reducer is just a way to change state values
  //function abc(){dispatch({type: <this is where the case goes like increment or decrement>})}

  //Actions - we pass it down in our provider
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  function addTransaction(input){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: input
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}