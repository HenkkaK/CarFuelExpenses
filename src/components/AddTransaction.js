import React, {useState} from 'react'

// Uusi transaktio, Gas in liters + laatikko & Amount spent + laatikko,
// lisäksi nappi jolla transaktio submitataan ( ei toimi vielä haha )

export const AddTransaction = () => {
    const [gas, setGas] = useState(0);
    const [amount, setAmount] = useState(0);

  return (
    <>
        <h3>Add new transaction</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Gas (L) </label>
                <input type="number" value={gas} onChange={(e) => setGas(e.target.value)} 
                placeholder="Enter gas in liters..." />
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
