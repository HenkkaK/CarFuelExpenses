import React, { useContext } from 'react';
import { Car } from './Car';

import { GlobalContext } from '../context/GlobalState';

// autot -taulukko

export const CarList = () => {
  const { cars } = useContext(GlobalContext);

  return (
    <>
      <h3>Cars</h3>
      <ul id="list" className="list">
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </ul>
    </>
  );
};
