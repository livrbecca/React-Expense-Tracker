import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  //console.log(context) - gives transactions array
  //instead of doing context.transactions, can destrcuture and pull out transactions array, which needs to be mapped through

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, key) => (
          <Transaction transaction={transaction} key={transaction.id}/>))}
      </ul>
    </>
  );
};

export default TransactionList;
