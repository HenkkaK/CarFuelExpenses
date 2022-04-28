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
  const gasperhundred = Math.round(100*gas/(kilometers/100))/100;
  const expenceperhundred = Math.round(100*expense/(kilometers/100))/100;

  return (
    <>
      <h2>{car.carName}</h2>
      <h4>{car.carBrand}</h4>
      <h4>{car.carModel}</h4>
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
        <div>
          <h4>Fuel per 100km (L/100km)</h4>
          <p className="money">{gasperhundred}</p>
        </div>
        <div>
          <h4>Expenses per 100km (€/100km)</h4>
          <p className="money">{expenceperhundred}</p>
        </div>
        </div>
    </>

    // <li>
    //   <p>{car.carName}</p>
    //   <p>{car.carBrand}</p>
    //   <p>{car.carModel}</p>
    //   <p>{gas}</p>
    //   <p>{expense}</p>
    //   <p>{kilometers}</p>
    //   <button onClick={() => deleteCar(car.id)} className="delete-btn">
    //     x
    //   </button>
    // </li>
  ); // Nappia painamalla voi poistaa auton
};
