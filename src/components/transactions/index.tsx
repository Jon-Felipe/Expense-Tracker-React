import React from 'react';

// components
import TransactionBlurb from './TransactionBlurb';

// dummy data
import { transactions } from '../../utils/transactions';
import Pill from '../ui/Pill';

type Props = {};

const Transactions = (props: Props) => {
  const handleOnClick = () => {
    console.log('Click');
  };

  return (
    <section className='w-11/12 max-w-screen-sm mx-auto py-5'>
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
      {transactions.map((t) => {
        const { id, transaction } = t;
        return (
          <TransactionBlurb
            key={id}
            id={id}
            type={transaction.type}
            item={transaction.item}
            description={transaction.description}
            amount={transaction.amount}
            time={transaction.time}
          />
        );
      })}
    </section>
  );
};

export default Transactions;
