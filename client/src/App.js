import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import Balance from "./components/Balance";
import HistoricalTransactions from "./components/HistoricalTransactions";
import IncomeExpense from "./components/IncomeExpense";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header>Expense Tracker</Header>
      <div>
        <Balance />
        <IncomeExpense />
        <HistoricalTransactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
