import React, {useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {

  const { deleteTransaction, modTransaction } = useContext(GlobalContext)
  
  const sign = (transaction.amount >= 0) ? '+' : '-'
  
  const [ edit, setEdit ] = useState(false)
  const [newAmount, setNewAmount] = useState('')
  const [newText, setNewText] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    
    newText !== '' && newAmount !== '' ? 
    modTransaction(transaction.id, newText, +newAmount)
    :
    setEdit(!edit)
    
    setNewAmount('')
    setNewText('')
    setEdit(!edit)
  }
  
  return(
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} >
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
    
    <button onClick={()=>deleteTransaction(transaction.id)} className ='delete-btn'>x</button>
    
    <button onClick={()=>setEdit(!edit)}>Edit</button>
    {edit && 
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder={transaction.text}
        value={newText} 
        onChange={(e)=>setNewText(e.currentTarget.value)} 
      />
      <input
        type='Number'
        placeholder={transaction.amount}
        value={newAmount}
        onChange={(e)=>setNewAmount(e.currentTarget.value)}
      />
      <button>Submit Changes</button>
    </form>
    }
  </li>
  )
}