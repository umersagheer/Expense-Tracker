import { useContext } from "react";
import { GlobalContext } from "../context/GlobelState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">+${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
