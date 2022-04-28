import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
// Fuel (L) ja Expenses (€)

export const FuelExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Fuel (L)</h4>
        <p className="money plus">0.00</p>
      </div>
      <div>
        <h4>Expenses (€)</h4>
        <p className="money minus">{expense}</p>
      </div>
      <div>
        <h4>Distance (km)</h4>
        <p className="money plus">0.00</p>
      </div>
      <div>
        <h4>Average (€/100 km)</h4>
        <p className="money minus">0.00</p>
      </div>
      <div>
        <h4>Average (L/100 km)</h4>
        <p className="money plus">0.00</p>
      </div>
    </div>
  );
};
