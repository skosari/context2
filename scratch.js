import React, { createContext, useReducer } from 'react'

const initialState = {
  transactions:  []
}

//Create Context
export const GlobalContext = createContext(initialState)

//how we specify app state changes in response to actions to our stor/context
function appReducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(x => x.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state
  }
}



//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
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