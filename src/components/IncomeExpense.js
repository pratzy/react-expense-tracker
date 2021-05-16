import React from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = React.useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expenses = Math.abs(
    transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0)
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
