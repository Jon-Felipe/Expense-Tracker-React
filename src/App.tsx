import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import Income from './components/income';
import Expense from './components/expense';

// extras
import { ITransactionType, IModalDataType, IAmountValues } from './utils/types';

const initialAmountValues: IAmountValues = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const initialModalData: IModalDataType = {
  type: '',
  category: '',
  amount: 0,
  description: '',
};

const App = () => {
  const [amountValues, setAmountValues] =
    useState<IAmountValues>(initialAmountValues);
  const [transactions, setTransactions] = useState<ITransactionType[]>([]);
  const [modalValues, setModalValues] =
    useState<IModalDataType>(initialModalData);

  // Set modal form data
  const handleModalFormChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setModalValues({ ...modalValues, [name]: value });
  };

  // Submit modal data
  const handleSubmitTransaction = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    const { type, category, amount, description } = modalValues;

    if (!type || !category || !amount || !description) {
      toast.error('Please fill in all fields');
      return;
    }

    setTransactions((prevState: ITransactionType[]) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          type,
          transaction: {
            item: category,
            description,
            amount: +amount,
            time: '10:00PM',
          },
        },
      ];
    });
    setModalValues(initialModalData);
    toast.success('Transaction added');
  };

  return (
    <>
      <Header />

      <main>
        {/* Amounts */}
        <Amounts
          balance={amountValues.income}
          income={amountValues.income}
          expense={amountValues.expenses}
        />

        <div className='max-w-screen-lg mx-auto px-4 flex flex-col gap-4 md:flex-row'>
          <Income />
          <Expense />
        </div>

        {/* Transactions */}
        <Transactions transactions={transactions} />
      </main>
      <ToastContainer position='top-center' />
    </>
  );
};

export default App;
