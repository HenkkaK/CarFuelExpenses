import React, { useState } from 'react';

export const AddCar = () => {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');

  return (
    <>
      <h3>Add New Car</h3>
      <form>
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
