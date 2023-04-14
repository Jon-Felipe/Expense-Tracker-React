import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { IIncomeValues, ITransactionType } from '../../utils/types';

// components
import Input from '../ui/Input';

type Props = {
  initialIncomeValues: IIncomeValues;
  setIncomeValues: React.Dispatch<React.SetStateAction<IIncomeValues>>;
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionType[]>>;
};

const IncomeForm = ({
  initialIncomeValues,
  setTransactions,
  setIncomeValues,
}: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setIncomeValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          type='text'
          name='income'
          value={initialIncomeValues.income}
          placeholder='e.g. Salary'
          onChange={handleChange}
        />
      </div>
      <div className='my-2'>
        <Input
          LabelText='Amount'
          type='number'
          name='amount'
          value={initialIncomeValues.amount}
          placeholder='$5500'
          onChange={handleChange}
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
