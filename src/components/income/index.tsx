import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';

// components
import Input from '../ui/Input';

type Props = {};

const IncomeForm = (props: Props) => {
  return (
    <article className='w-full border-2 border-dashed px-6 py-4'>
      <h3 className='text-2xl font-bold'>Add Income</h3>
      <div className='my-2'>
        <Input
          LabelText='Income'
          type='number'
          name='income'
          value=''
          onChange={() => console.log('handle change')}
        />
      </div>
      <div className='my-2'>
        <Input
          LabelText='Amount'
          type='number'
          name='amount'
          value=''
          onChange={() => console.log('handle change')}
        />
      </div>
      <button className='flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg'>
        Add Income
        <span>
          <BiDollarCircle className='w-6 h-6' />
        </span>
      </button>
    </article>
  );
};

export default IncomeForm;
