import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transactions";

const HistoricalTransactions = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          // console.log("Key:" + transaction)
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default HistoricalTransactions;
