import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state

const initialState = {
  transactions: [],
};

// create context
// global context, export so it can be used elsewhere
// for other componenets to have access to the global state, need a provider warpped around comps in App

export const GlobalContext = createContext(initialState);

//Provider component
// need dispatch for reducer
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
