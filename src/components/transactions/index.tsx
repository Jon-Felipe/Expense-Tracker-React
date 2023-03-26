import React from 'react';

// components
import TransactionBlurb from './TransactionBlurb';
import Pill from '../ui/Pill';
import Button from '../ui/Button';

// extras
import { ITransactionType } from '../../utils/types';

type Props = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transactions: ITransactionType[];
};

const Transactions = ({ setModalIsOpen, transactions }: Props) => {
  const handleOnClick = () => {
    console.log('Click');
  };

  const handleAddTransaction = () => {
    setModalIsOpen(true);
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

      <div className='flex justify-end'>
        <div className='w-1/4'>
          <Button
            type='button'
            text='Add Transaction'
            onClick={handleAddTransaction}
          />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
