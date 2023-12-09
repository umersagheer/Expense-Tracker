import { useContext } from "react";
import { GlobalContext } from "../context/GlobelState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;
