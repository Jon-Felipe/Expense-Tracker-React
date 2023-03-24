import React, { useState } from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import Modal from './components/ui/Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header />

      <main>
        {/* Modal */}
        {isModalOpen && <Modal setModalIsOpen={setModalOpen} />}

        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions setModalIsOpen={setModalOpen} />
      </main>
    </>
  );
};

export default App;
