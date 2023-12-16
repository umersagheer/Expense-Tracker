/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobelState";

const Transaction = ({ _id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  console.log(_id);

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>{amount}$</span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
