import './App.css';
import { Header } from './components/Header';
import { TotalExpenses } from './components/TotalExpenses';
import { FuelExpense } from './components/FuelExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { AddCar } from './components/AddCar';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <TotalExpenses />
        <FuelExpense />
        <AddCar />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
