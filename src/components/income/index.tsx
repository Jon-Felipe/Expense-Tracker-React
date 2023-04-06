import React from 'react';

type Props = {};

const Income = (props: Props) => {
  return (
    <article className='w-full border-2 border-dashed px-6 py-4'>
      <h3 className='text-2xl font-bold'>Insert Income Value</h3>
      <div className='my-2'>
        <h5 className='text-lg font-semibold'>Income Name</h5>
        <input
          type='number'
          placeholder='e.g. Groceries'
          className='w-full border-2 px-4 py-2 rounded-lg'
        />
      </div>
      <div className='my-2'>
        <h5 className='text-lg font-semibold'>Amount</h5>
        <input
          type='number'
          placeholder='$350'
          className='w-full border-2 px-4 py-2 rounded-lg'
        />
      </div>
      <button className='bg-gray-900 text-white px-4 py-2 rounded-lg'>
        Add Income
      </button>
    </article>
  );
};

export default Income;
