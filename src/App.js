import './App.css';
import { Header } from './components/Header'
import NavBar from './components/NavBar'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

//import { withAuthenticator } from 'aws-amplify-react'

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      
      
    </GlobalProvider>
  );
}

export default App;
