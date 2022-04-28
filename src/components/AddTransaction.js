import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
// Uusi transaktio, Gas in liters + laatikko & Amount spent + laatikko,
// lisäksi nappi jolla transaktio submitataan

export const AddTransaction = () => {
    const [gas, setGas] = useState(0);
    const [amount, setAmount] = useState(0);

    const { addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        gas: +gas,
        amount: +amount
     
      }
      addTransaction(newTransaction);
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="amount">Fuel (L) </label>
                <input type="number" value={gas} onChange={(e) => setGas(e.target.value)} 
                placeholder="Enter fuel in liters..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount spent (€)<br />
                    </label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in euros..." />
            </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
