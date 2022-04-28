import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Yksi transaktio, joka näkyy History -taulukolla

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="minus">
      <span>{transaction.gas} L </span>
      <span>{transaction.carId}</span>
      <span>{Math.abs(transaction.amount)} €</span>
      <span>{Math.abs(transaction.distance)} km</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  ); // Nappia painamalla voi nyt poistaa tuloja ja menoja.
};
