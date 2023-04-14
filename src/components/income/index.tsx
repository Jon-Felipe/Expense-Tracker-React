import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { ITransactionType } from '../../utils/types';

// components
import Input from '../ui/Input';

type Props = {
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionType[]>>;
};

const IncomeForm = ({ setTransactions }: Props) => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <form
      className='w-full border-2 border-dashed px-6 py-4'
      onSubmit={handleSubmit}
    >
      <h3 className='text-2xl font-bold'>Add Income</h3>
      <div className='my-2'>
        <Input
          LabelText='Income'
          type='number'
          name='income'
          value=''
          placeholder='e.g. Salary'
          onChange={() => console.log('handle change')}
        />
      </div>
      <div className='my-2'>
        <Input
          LabelText='Amount'
          type='number'
          name='amount'
          value=''
          placeholder='$5500'
          onChange={() => console.log('handle change')}
        />
      </div>
      <button
        type='submit'
        className='flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg'
      >
        Add Income
        <span>
          <BiDollarCircle className='w-6 h-6' />
        </span>
      </button>
    </form>
  );
};

export default IncomeForm;
