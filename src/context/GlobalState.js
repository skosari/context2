import React, { createContext, useReducer, useEffect, useState } from 'react'
import AppReducer from './AppReducer'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import {listTransactionss} from '../graphql/queries'

const initialState = {
  transactions:  []
} //{id:Number, text: '', amount: Number, }

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  //AppReducer is our switch statement that runs our state functions ex.: 
  //A reducer is just a way to change state values
  //function abc(){dispatch({type: <this is where the case goes like increment or decrement>})}
  
  //Login User
  const [ user, setUser ] = useState([])//TODO pass this state to your components and build them out with the authenticated user info
  useEffect(()=>{
    async function getTransactions(){
      try {
        const res = API.graphql(graphqlOperation(listTransactionss))
        setUser(res)
        console.log(res)
      } catch(err){
        console.log(err)
      }
    }
    getTransactions()
  },[])
  
  //Persistent Login Status
  const [authStatus, setAuthStatus] = useState({})
  useEffect(()=>{
    async function curSession(){
      try{
        const session = await Auth.currentSession()
        setAuthStatus(session)
        console.log(session)
      } catch(err){
        console.log(err)
      }
    }
    curSession()
  },[])

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
  function modTransaction(id, newText, newAmount){
    dispatch({
      type: 'MOD_TRANSACTION',
      payload: {id: id, text: newText, amount: newAmount}
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      modTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}