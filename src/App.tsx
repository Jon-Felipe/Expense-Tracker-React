import React from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';

function App() {
  return (
    <>
      <Header />

      <main className=' bg-gray-50 h-screen'>
        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions />
      </main>
    </>
  );
}

export default App;
