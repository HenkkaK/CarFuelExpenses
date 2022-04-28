import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Total expenses sivun yläosassa
// Total expenses toimii ja päivittyy sivun yläosaan

export const TotalExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Total Expenses</h4>
      <h1>{total}€</h1>
    </>
  );
};
