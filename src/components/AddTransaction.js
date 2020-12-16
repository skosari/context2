import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {v4 as uuidv4} from 'uuid'
export const AddTransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)
  function onSubmit(e){
    e.preventDefault()     
    const input={
      id: uuidv4(),
      text,
      amount: Number(amount)
    }
    addTransaction(input)
    setText('')
    setAmount(0)
  }
  return(
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' placeholder='Enter text...' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount <br /> (negative - expense, positive - income)</label>
          <input type='number' placeholder='Enter amount...' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}