import React from 'react';

type Props = {};

const ExpenseForm = (props: Props) => {
  return (
    <article className='w-full border-2 border-dashed px-6 py-4'>
      <h3 className='text-2xl font-bold'>Add New Expense</h3>
      <div>
        <div className='my-2'>
          <h5 className='text-lg font-semibold'>Expense Name</h5>
          <input
            type='text'
            placeholder='e.g. Coffee'
            className='w-full border-2 px-4 py-2 rounded-lg'
          />
        </div>
        <div className='my-2'>
          <h5 className='text-lg font-semibold'>Amount</h5>
          <input
            type='number'
            placeholder='e.g. 3.50'
            className='w-full border-2 px-4 py-2 rounded-lg'
          />
        </div>
      </div>
      <button className='bg-gray-900 text-white px-4 py-2 rounded-lg'>
        Create Expense
      </button>
    </article>
  );
};

export default ExpenseForm;
