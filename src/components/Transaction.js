import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Yksi transaktio, joka näkyy History -taulukolla

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="minus">
      <span>{transaction.car}</span>
      <span>{transaction.gas} L </span>
      <span>{Math.abs(transaction.amount)} €</span>
      <span>{Math.abs(transaction.distance)} km</span>
      <span>{Math.round(100*transaction.amount/(transaction.distance/100))/100} €/100km</span>
      <span>{Math.round(100*transaction.gas/(transaction.distance/100))/100} l/100km</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  ); // Nappia painamalla voi nyt poistaa tuloja ja menoja.
};
