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

      <main className=' bg-gray-50 h-screen'>
        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions />

        {/* Modal */}
        <Modal />
      </main>
    </>
  );
}

export default App;
