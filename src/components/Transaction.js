import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Yksi transaktio, joka näkyy History -taulukolla

export const Transaction = ({ transaction }) => {
  const { deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '-'
  return (
    <li className="minus">
        {transaction.gas} L <span>{sign}{Math.abs(transaction.amount)} €</span><span>{Math.abs(transaction.distance)} km</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )  // Nappia painamalla voi nyt poistaa tuloja ja menoja.
}
