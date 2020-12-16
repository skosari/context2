import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () =>{
  
  const { transactions } = useContext(GlobalContext)
  
  const amounts = transactions.map(x=>x.amount)
  const total = amounts.reduce((a,b) => (a += b), 0).toFixed(2)

  return(
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}