import React from 'react';
import { ITransactionType } from '../../utils/types';

// components
import TransactionItem from '../transactions/TransactionItem';

type Props = {
  transactions: ITransactionType[];
};

const Table = ({ transactions }: Props) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            {['Item', 'Amount', 'Date', '', ''].map((i, index) => (
              <th key={index} className='px-6 py-3'>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <TransactionItem transactionItem={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
