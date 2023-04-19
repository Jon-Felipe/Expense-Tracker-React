import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import IncomeForm from './components/income';
import ExpenseForm from './components/expense';

// extras
import { ITransactionType } from './utils/types';

const App = () => {
  const [transactions, setTransactions] = useState<ITransactionType[]>([]);

  return (
    <>
      <Header />

      <main className='w-11/12 max-w-screen-lg mx-auto'>
        {/* Amounts */}
        <Amounts transactions={transactions} />

        <div className='flex flex-col gap-4 md:flex-row'>
          <IncomeForm setTransactions={setTransactions} />
          <ExpenseForm setTransactions={setTransactions} />
        </div>

        {/* Transactions */}
        <Transactions transactions={transactions} />
      </main>
      <ToastContainer position='top-center' />
    </>
  );
};

export default App;
