import React from 'react';
import Amounts from './components/amounts';

// components
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <main className=' bg-gray-50 h-screen'>
        {/* Amounts Blurbs */}
        <Amounts />
      </main>
    </>
  );
}

export default App;
