import React, { useState } from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import Modal from './components/ui/Modal';

// extras
import ITransactionType from './utils/types';
import { transactions as dummyTransactions } from './utils/transactions';

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] =
    useState<ITransactionType[]>(dummyTransactions);

  return (
    <>
      <Header />

      <main>
        {/* Modal */}
        {isModalOpen && <Modal setModalIsOpen={setModalOpen} />}

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
