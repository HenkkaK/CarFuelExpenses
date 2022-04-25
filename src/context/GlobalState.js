import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: [
        { id: 1, gas: 8, amount: -16 },
        { id: 2, gas: 10, amount: -20 },
        { id: 3, gas: 5, amount: -10 },
        { id: 4, gas: 20, amount: -40 }
    ]
}

// Creating context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}