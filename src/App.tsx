import React, { useState } from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import TransactionModal from './components/transactions/TransactionModal';

// extras
import ITransactionType from './utils/types';
import { transactions as dummyTransactions } from './utils/transactions';

const modalData = {
  category: '',
  amount: '',
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] =
    useState<ITransactionType[]>(dummyTransactions);
  const [modalValues, setModalValues] = useState(modalData);

  // Close Modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Set modal form data
  const handleModalFormChange = (
    e: React.FormEvent<HTMLInputElement>
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

    console.log(modalValues);
  };

  return (
    <>
      <Header />

      <main>
        {/* Transaction modal */}
        {isModalOpen && (
          <TransactionModal
            handleCloseModal={handleModalClose}
            formValues={modalValues}
            handleChange={handleModalFormChange}
            handleSubmitTransaction={handleSubmitTransaction}
          />
        )}

        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions
          setModalIsOpen={setModalOpen}
          transactions={transactions}
        />
      </main>
    </>
  );
};

export default App;
