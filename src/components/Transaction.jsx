/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobelState";

const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>{amount}$</span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
