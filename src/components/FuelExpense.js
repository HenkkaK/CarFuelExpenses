import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
// Fuel (L) ja Expenses (€)

export const FuelExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const calc = (item) =>
    item
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

  const expenses = transactions.map((transaction) => transaction.amount);
  const moreGas = transactions.map((transaction) => transaction.gas);
  const distances = transactions.map((transaction) => transaction.distance);

  const gas = calc(moreGas);
  const expense = calc(expenses);
  const kilometers = calc(distances);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Fuel (L)</h4>
        <p className="money">{gas}</p>
      </div>
      <div>
        <h4>Expenses (€)</h4>
        <p className="money">{expense}</p>
      </div>
      <div>
        <h4>Distance driven (km)</h4>
        <p className="money">{kilometers}</p>
      </div>
    </div>
    // income and expenses now show up abaove the history
  );
};
