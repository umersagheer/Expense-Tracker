import { GlobalContext } from "../context/GlobelState";
import { useContext, useEffect } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h3>History</h3>
      {loading ? (
        <p>LOADING... </p>
      ) : (
        <ul className="list">
          {transactions.map((transaction) => {
            return <Transaction key={transaction._id} {...transaction} />;
          })}
        </ul>
      )}
    </>
  );
};

export default TransactionList;
