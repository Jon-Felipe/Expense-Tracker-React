import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';
import { calculateTotal } from '../../utils/helper';

// components
import AmountBlurb from './AmountBlurb';
import { ITransactionType } from '../../utils/types';

type Props = {
  transactions: ITransactionType[];
};

const Amounts = ({ transactions }: Props) => {
  const income: number = calculateTotal(transactions, 'income');
  const expense: number = calculateTotal(transactions, 'expense');
  const total = income - expense;

  return (
    <section className='flex flex-col gap-4 md:flex-row my-10'>
      <AmountBlurb
        type='Account Balance'
        value={total}
        icon={<FaMoneyBill className='w-10 h-10' />}
        typeColour='text-gray-400'
      />
      <AmountBlurb
        type='Income'
        value={income}
        icon={<FiArrowDown className='w-10 h-10 text-green-500' />}
        typeColour='text-white'
        bgColour='bg-green-500'
        valueColour='text-white'
      />
      <AmountBlurb
        type='Expenses'
        value={expense}
        icon={<FiArrowUp className='w-10 h-10 text-red-500' />}
        typeColour='text-white'
        bgColour='bg-red-500'
        valueColour='text-white'
      />
    </section>
  );
};

export default Amounts;
