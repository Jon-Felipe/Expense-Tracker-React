import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

type Props = {
  id: number;
  type: string;
  item: string;
  amount: number;
  date: Date;
};

const TransactionBlurb = ({ id, type, item, amount, date }: Props) => {
  const isExpense = type === 'expense';
  return (
    <article className='flex items-center justify-between bg-slate-50 my-4 p-6 rounded-xl shadow'>
      <div>
        <h3 className='text-lg font-bold mb-2'>{item}</h3>
        <div>
          <p
            className={`${
              isExpense ? 'text-red-500' : 'text-green-500'
            } font-bold text-lg mb-2`}
          >
            {`${isExpense ? '-' : '+'}$${amount}`}
          </p>
          <p className='text-gray-400'>{date.toDateString()}</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <button>
          <FiEdit className='w-5 h-5' />
        </button>
        <button>
          <FiTrash className='w-5 h-5' />
        </button>
      </div>
    </article>
  );
};

export default TransactionBlurb;
