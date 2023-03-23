import React from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import Modal from './components/ui/Modal';

function App() {
  return (
    <>
      <Header />

      <main>
        {/* Modal */}
        {/* <Modal /> */}

        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions />
      </main>
    </>
  );
}

export default App;
