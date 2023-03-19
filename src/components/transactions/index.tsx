import React from 'react';

// components
import TransactionBlurb from './TransactionBlurb';

// dummy data
import { transactions } from '../../utils/transactions';

type Props = {};

const Transactions = (props: Props) => {
  return (
    <section className='w-11/12 max-w-screen-sm mx-auto py-5'>
      <div className='flex items-center justify-between'>
        <h3>Recent Transactions</h3>
        <button>View More</button>
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
