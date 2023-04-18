import React, { useState } from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { ITransactionType } from '../../utils/types';

// components
import Input from '../ui/Input';

type Props = {
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionType[]>>;
};

const initialValues = {
  expense: '',
  amount: 0,
};

const ExpenseForm = ({ setTransactions }: Props) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setValues((prevState) => {
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
      <h3 className='text-2xl font-bold'>Add New Expense</h3>
      <div>
        <div className='my-2'>
          <Input
            LabelText='Expense'
            type='text'
            name='expense'
            value={values.expense}
            placeholder='e.g Coffee'
            onChange={handleChange}
            required
          />
        </div>
        <div className='my-2'>
          <Input
            LabelText='Amount'
            type='number'
            name='amount'
            value={values.amount}
            placeholder='e.g 3.50'
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type='submit'
        className='flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg'
      >
        Create Expense
        <span>
          <BiDollarCircle className='w-6 h-6' />
        </span>
      </button>
    </form>
  );
};

export default ExpenseForm;
