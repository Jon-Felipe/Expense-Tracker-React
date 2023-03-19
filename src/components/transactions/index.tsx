import React from 'react';

// components
import TransactionBlurb from './TransactionBlurb';

// dummy data
import { transactions } from '../../utils/transactions';

type Props = {};

const Transactions = (props: Props) => {
  return (
    <section>
      {transactions.map((transaction) => (
        <TransactionBlurb key={transaction.id} />
      ))}
    </section>
  );
};

export default Transactions;
