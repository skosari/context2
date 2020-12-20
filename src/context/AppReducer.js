//how we specify app state changes in response to actions to our stor/context

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
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
      case 'MOD_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.map( x => 
            x.id === action.payload.id 
            ? 
            {...x, text: action.payload.text, amount: action.payload.amount} 
            : 
            x
          )
        }
      case 'GET_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload.id
        }
    default:
      return state;
  }
}