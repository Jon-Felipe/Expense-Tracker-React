import React from 'react';
import { FaTimes } from 'react-icons/fa';

// components
import Input from '../ui/Input';
import Button from '../ui/Button';

type Props = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitTransaction: (e: React.FormEvent<HTMLFormElement>) => void;
};

const TransactionModal = ({
  setModalIsOpen,
  handleSubmitTransaction,
}: Props) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='w-screen h-screen bg-gray-100 fixed flex items-center justify-center'>
      {/* Container */}
      <div className='w-1/3 rounded-lg bg-white shadow flex flex-col p-8'>
        <div className='flex items-center justify-between'>
          {/* Title */}
          <h1 className='font-bold text-3xl'>Transaction Details</h1>
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className='bg-slate-50 p-2 rounded-md shadow'
          >
            <FaTimes className='h-6 w-6' />
          </button>
        </div>
        {/* Body */}
        <form onSubmit={handleSubmitTransaction}>
          <div className='flex flex-col gap-5 mt-8'>
            <Input type='text' name='category' placeholder='Category' />
            <div className='flex gap-8'>
              <div className='flex-1'>
                <Input type='number' name='amount' placeholder='Amount' />
              </div>
              <div className='flex-1'>
                <Input type='number' name='expense' placeholder='Expense' />
              </div>
            </div>
            <Input type='text' name='description' placeholder='Description' />
          </div>
          {/* Footer */}
          <div className='mt-4 flex justify-end'>
            <div className='w-1/4'>
              <Button type='submit' text='Add Transaction' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
