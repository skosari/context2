import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(x => x.amount)
  const income = amounts.filter(x=>x>0).reduce((a,b)=> (a+=b),0).toFixed(2)
  console.log(income)
  const expense = amounts.filter(x=>x<0).reduce((a,b)=>(a+=b),0).toFixed(2)
  console.log(expense)

  return(
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${Math.abs(expense)}</p>
      </div>
    </div>
  )
  
}