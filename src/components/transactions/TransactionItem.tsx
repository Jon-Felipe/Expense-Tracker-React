import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { ITransactionType } from '../../utils/types';

type Props = {
  transactionItem: ITransactionType;
};

const TransactionItem = ({ transactionItem }: Props) => {
  const { transaction } = transactionItem;
  return (
    <>
      <td className='px-6 py-4'>{transaction.item}</td>
      <td className='px-6 py-4'>{transaction.amount}</td>
      <td className='px-6 py-4'>{transaction.date.toDateString()}</td>
      <td className='px-6 py-4'>
        <button>
          <FiEdit className='w-5 h-5' />
        </button>
      </td>
      <td className='px-6 py-4'>
        <button>
          <FiTrash className='w-5 h-5' />
        </button>
      </td>
    </>
  );
};

export default TransactionItem;
