import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { car } from './Car';
// Uusi transaktio, Gas in liters + laatikko & Amount spent + laatikko,
// lisäksi nappi jolla transaktio submitataan

export const AddTransaction = () => {
  const [gas, setGas] = useState(0);
  const [amount, setAmount] = useState(0);
  const [distance, setDistance] = useState(0);
  // const [carId, setCarId] = useState(0);
  const [car, setCar] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      // carId,
      car,
      gas: +gas,
      amount: +amount,
      distance: +distance,
    };
    addTransaction(newTransaction);
  };

  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(true);

  const { cars } = useContext(GlobalContext);

  return (
    <>
      <h3>
        Add new transaction
        <button
          className="tglbtn"
          onClick={() => {
            setShow(!show);
            setArrow(!arrow);
          }}
        >
          {arrow ? '▼' : '▲'}
        </button>
      </h3>
      {show ? (
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label htmlFor="carId">Car</label>
              <br />
              <select
                className="dropdown-content"
                value={car}
                placeholder="Select car..."
                onChange={(e) => setCar(e.target.value)}
              >
                <option>-----------</option>
                {cars.map((car) => (
                  <option key={car.carName} value={car.carName}>
                    {car.carName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="amount">Fuel (L) </label>
              <input
                type="number"
                value={gas}
                onChange={(e) => setGas(e.target.value)}
                placeholder="Enter fuel in liters..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount spent (€)
                <br />
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in euros..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Distance driven (km)
                <br />
              </label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="Enter distance in kilometers..."
              />
            </div>
            <button className="btn">Add transaction</button>
          </form>
        </div>
      ) : null}
    </>
  );
};
