import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';

type Props = {};

const IncomeForm = (props: Props) => {
  return (
    <article className='w-full border-2 border-dashed px-6 py-4'>
      <h3 className='text-2xl font-bold'>Add Income</h3>
      <div className='my-2'>
        <h5 className='text-lg font-semibold'>Income Name</h5>
        <input
          type='number'
          placeholder='e.g. Salary'
          className='w-full border-2 px-4 py-2 rounded-lg'
        />
      </div>
      <div className='my-2'>
        <h5 className='text-lg font-semibold'>Amount</h5>
        <input
          type='number'
          placeholder='$5500'
          className='w-full border-2 px-4 py-2 rounded-lg'
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
