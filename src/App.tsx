import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import TransactionModal from './components/transactions/TransactionModal';

// extras
import { ITransactionType, IModalDataType } from './utils/types';

const initialTransactionValues = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const initialModalData: IModalDataType = {
  type: '',
  category: '',
  amount: '',
  description: '',
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [transactionValues, setTransactionValues] = useState(
    initialTransactionValues
  );
  const [transactions, setTransactions] = useState<ITransactionType[]>([]);
  const [modalValues, setModalValues] =
    useState<IModalDataType>(initialModalData);

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
    setModalOpen(false);
    toast.success('Transaction added');
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
      <ToastContainer position='top-center' />
    </>
  );
};

export default App;
