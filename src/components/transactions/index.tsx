import React from 'react';

// components
import TransactionBlurb from './TransactionBlurb';
import Pill from '../ui/Pill';

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
    <section className='py-5 max-w-screen-sm mx-auto'>
      <div className='flex items-center justify-between'>
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
        transactions.map((t) => {
          const { id, type, transaction } = t;
          return (
            <TransactionBlurb
              key={id}
              id={id}
              type={type}
              item={transaction.item}
              amount={transaction.amount}
              date={transaction.date}
            />
          );
        })
      ) : (
        <NoTransactions />
      )}
    </section>
  );
};

export default Transactions;
