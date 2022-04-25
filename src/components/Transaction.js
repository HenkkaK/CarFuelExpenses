import React from 'react'

// Yksi transaktio, joka näkyy History -taulukolla

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '-'
  return (
    <li className="minus">
        {transaction.gas} L <span>{sign}{Math.abs(transaction.amount)} €</span><button className="delete-btn">x</button>
    </li>
  )
}
