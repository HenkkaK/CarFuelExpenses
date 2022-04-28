import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Yksi auto

export const Car = ({ car }) => {
  const { deleteCar } = useContext(GlobalContext);

  return (
    <li>
      <p>{car.carName}</p>
      <p>{car.carBrand}</p>
      <p>{car.carModel}</p>
      <button onClick={() => deleteCar(car.id)} className="delete-btn">
        x
      </button>
    </li>
  ); // Nappia painamalla voi poistaa auton
};
