import React, { useState } from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import TransactionModal from './components/transactions/TransactionModal';

// extras
import { ITransactionType, IModalDataType } from './utils/types';
import { transactions as dummyTransactions } from './utils/transactions';

const modalData: IModalDataType = {
  type: 'expense',
  category: '',
  amount: '',
  description: '',
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] =
    useState<ITransactionType[]>(dummyTransactions);
  const [modalValues, setModalValues] = useState<IModalDataType>(modalData);

  // Close Modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

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
  };

  return (
    <>
      <Header />

      <main>
        {/* Transaction modal */}
        {isModalOpen && (
          <TransactionModal
            handleCloseModal={handleModalClose}
            modalValues={modalValues}
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
