import React from 'react';

type Props = {
  id: number;
  type: string;
  item: string;
  description: string;
  amount: number;
  time: string;
};

const TransactionBlurb = ({
  id,
  type,
  item,
  description,
  amount,
  time,
}: Props) => {
  const isExpense = type === 'expense';
  return (
    <article className='flex items-center justify-between bg-slate-50 my-4 p-6 rounded-xl shadow'>
      <div>
        <h3 className='text-lg font-bold tracking-wide mb-2'>{item}</h3>
        <p className='text-gray-400 tracking-wider'>{description}</p>
      </div>

      <div>
        <p
          className={`${
            isExpense ? 'text-red-500' : 'text-green-500'
          } font-bold text-lg text-end mb-2`}
        >
          {`${isExpense ? '-' : '+'}$${amount}`}
        </p>
        <p className='text-gray-400'>{time}</p>
      </div>
    </article>
  );
};

export default TransactionBlurb;
