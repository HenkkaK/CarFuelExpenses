import React from 'react'

// Fuel (L) ja Expenses (€)

export const FuelExpense = () => {
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Fuel (L)</h4>
          <p className="money plus">0.00</p>
        </div>
        <div>
          <h4>Expenses (€)</h4>
          <p className="money minus">0.00</p>
        </div>
      </div>
  )
}
