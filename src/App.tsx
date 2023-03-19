import React from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import RecentTransactions from './components/RecentTransactions';

function App() {
  return (
    <>
      <Header />

      <main className=' bg-gray-50 h-screen'>
        {/* Amounts */}
        <Amounts />

        {/* Recent Transactions */}
        <RecentTransactions />
      </main>
    </>
  );
}

export default App;
