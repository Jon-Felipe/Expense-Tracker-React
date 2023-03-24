import React from 'react';
import { FaTimes } from 'react-icons/fa';

// components
import Input from './Input';

type Props = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setModalIsOpen }: Props) => {
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
        <div className='flex flex-col gap-5 mt-8'>
          <Input type='text' name='category' placeholder='Category' />
          <div className='flex gap-8'>
            <div className='flex-1'>
              <Input type='text' name='amount' placeholder='Amount' />
            </div>
            <div className='flex-1'>
              <Input type='text' name='expense' placeholder='Expense' />
            </div>
          </div>
          <Input type='text' name='description' placeholder='Description' />
        </div>
        {/* Footer */}
        <div className='flex justify-end gap-4 mt-4'>
          <button onClick={handleCloseModal}>Cancel</button>
          <button>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
