import React from "react";
import { GlobalContext } from "../context/GlobalState";

import { numberWithCommas } from "../utils/format";

const Transactions = ({ transaction }) => {
  const { deleteTransaction } = React.useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};

export default Transactions;
