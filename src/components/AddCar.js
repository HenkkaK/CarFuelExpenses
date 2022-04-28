import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddCar = () => {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');

  const { addCar } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: Math.floor(Math.random() * 10000000),
      carName,
      carBrand,
      carModel,
    };
    addCar(newCar);
  };

  return (
    <>
      <h3>Add New Car</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Car Name</label>
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            placeholder="Enter car Name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Car Brand</label>
          <input
            type="text"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            placeholder="Enter car brand"
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Car Model</label>
          <input
            type="text"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            placeholder="Enter car model"
          />
        </div>
        <button className="btn">Add Car</button>
      </form>
    </>
  );
};
