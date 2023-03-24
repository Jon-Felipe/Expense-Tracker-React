import React from 'react';
import { FaTimes } from 'react-icons/fa';

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
      <div className='w-1/3 h-1/2 rounded-lg bg-white shadow flex flex-col p-8'>
        <div className='flex items-center justify-between'>
          {/* Title */}
          <div>
            <h1 className='font-bold text-3xl'>Transaction Details</h1>
          </div>
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className='bg-slate-50 p-2 rounded-md shadow'
          >
            <FaTimes className='h-6 w-6' />
          </button>
        </div>
        {/* Body */}
        <div className='h-full'>
          <div>
            <input type='text' placeholder='placeholder text' />
          </div>
          <div>
            <input type='text' placeholder='placeholder text' />
          </div>
          <div>
            <input type='text' placeholder='placeholder text' />
          </div>
          <div>
            <input type='text' placeholder='placeholder text' />
          </div>
        </div>
        {/* Footer */}
        <div className='flex justify-end gap-4'>
          <button onClick={handleCloseModal}>Cancel</button>
          <button>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
