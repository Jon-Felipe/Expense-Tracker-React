import React from 'react';

// components
import Pill from '../ui/Pill';
import Table from '../ui/Table';

// extras
import { ITransactionType } from '../../utils/types';

type Props = {
  transactions: ITransactionType[];
};

const Transactions = ({ transactions }: Props) => {
  const handleOnClick = () => {
    console.log('Click');
  };

  const NoTransactions = () => {
    return (
      <div className='flex flex-col items-center justify-center my-14'>
        <h1 className='text-2xl font-bold'>No transactions were found</h1>
        <p>Start adding some...</p>
      </div>
    );
  };

  return (
    <section className='py-5'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-3xl font-bold tracking-wide'>
          Recent Transactions
        </h3>
        <Pill
          type='button'
          onClick={handleOnClick}
          bgColour='bg-purple-100'
          textColour='text-purple-500'
          text='View More'
        />
      </div>
      {transactions.length > 0 ? (
        <Table transactions={transactions} />
      ) : (
        <NoTransactions />
      )}
    </section>
  );
};

export default Transactions;
