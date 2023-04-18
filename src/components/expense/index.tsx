import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { ITransactionType } from '../../utils/types';

// components
import Input from '../ui/Input';

type Props = {
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionType[]>>;
};

const ExpenseForm = ({ setTransactions }: Props) => {
  return (
    <article className='w-full border-2 border-dashed px-6 py-4'>
      <h3 className='text-2xl font-bold'>Add New Expense</h3>
      <div>
        <div className='my-2'>
          <Input
            LabelText='Expense'
            type='text'
            name='expense'
            value=''
            placeholder='e.g Coffee'
            onChange={() => console.log('handle change')}
            required
          />
        </div>
        <div className='my-2'>
          <Input
            LabelText='Amount'
            type='number'
            name='amount'
            value=''
            placeholder='e.g 3.50'
            onChange={() => console.log('handle change')}
            required
          />
        </div>
      </div>
      <button className='flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg'>
        Create Expense
        <span>
          <BiDollarCircle className='w-6 h-6' />
        </span>
      </button>
    </article>
  );
};

export default ExpenseForm;
