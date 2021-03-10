// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }
      case "ADD_TRANSACTION":
          return {
              ...state,
              transactions: [action.payload, ...state.transactions]
          }
    default:
      return state;
  }
};

//reducer - how we specify the applicaton state changes in response to certain actions to our context
// switch is based on type, like an id 'delete' or 'add' or 'default'
