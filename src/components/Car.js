import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Yksi auto

export const Car = ({ car }) => {
  const { deleteCar } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const calc = (item) =>
    item
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

  const carTransactions = transactions.filter(
    (transaction) => transaction.car == car.carName
  );

  const expenses = carTransactions.map((transaction) => transaction.amount);
  const moreGas = carTransactions.map((transaction) => transaction.gas);
  const distances = carTransactions.map((transaction) => transaction.distance);

  const gas = calc(moreGas);
  const expense = calc(expenses);
  const kilometers = calc(distances);

  return (
    <li>
      <p>{car.carName}</p>
      <p>{car.carBrand}</p>
      <p>{car.carModel}</p>
      <p>{gas}</p>
      <p>{expense}</p>
      <p>{kilometers}</p>
      <button onClick={() => deleteCar(car.id)} className="delete-btn">
        x
      </button>
    </li>
  ); // Nappia painamalla voi poistaa auton
};
