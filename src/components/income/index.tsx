import React, { useState } from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { IIncomeValues, ITransactionType } from '../../utils/types';

// components
import Input from '../ui/Input';

type Props = {
  setTransactions: React.Dispatch<React.SetStateAction<ITransactionType[]>>;
};

const initialValues: IIncomeValues = {
  income: '',
  amount: 0,
};

const IncomeForm = ({ setTransactions }: Props) => {
  const [values, setValues] = useState<IIncomeValues>(initialValues);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { income, amount } = values;

    if (!income || !amount) {
      alert('Please fill in the required fields');
      return;
    }

    setTransactions((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          type: 'income',
          transaction: {
            item: income,
            amount: amount,
            date: new Date(),
          },
        },
      ];
    });
    setValues(initialValues);
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
          value={values.income}
          placeholder='e.g. Salary'
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
          placeholder='$5500'
          onChange={handleChange}
          required
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
