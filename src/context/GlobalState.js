import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
  transactions: [],
  cars: [],
};

// Creating context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function addCar(car) {
    dispatch({
      type: 'ADD_CAR',
      payload: car,
    });
  }

  function deleteCar(id) {
    dispatch({
      type: 'DELETE_CAR',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        cars: state.cars,
        deleteTransaction,
        addTransaction,
        addCar,
        deleteCar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
