import React from 'react';
import { FaTimes } from 'react-icons/fa';

// components
import Input from '../ui/Input';
import Button from '../ui/Button';
import RadioButton from '../ui/RadioButton';
import TextArea from '../ui/TextArea';

// extras
import { IModalDataType } from '../../utils/types';

type Props = {
  handleCloseModal: () => void;
  modalValues: IModalDataType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmitTransaction: (e: React.FormEvent<HTMLFormElement>) => void;
};

const TransactionModal = ({
  handleCloseModal,
  modalValues,
  handleChange,
  handleSubmitTransaction,
}: Props) => {
  return (
    <div className='w-screen h-screen bg-gray-100 fixed flex items-center justify-center'>
      {/* Container */}
      <div className='w-1/3 rounded-lg bg-white shadow flex flex-col p-8'>
        <div className='flex items-center justify-between'>
          {/* Title */}
          <h1 className='mb-4 text-xl font-medium text-gray-900'>
            Add Your Transaction Details
          </h1>
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
          >
            <FaTimes className='h-5 w-5' />
          </button>
        </div>
        {/* Body */}
        <form onSubmit={handleSubmitTransaction}>
          <div className='flex flex-col gap-5 mt-8'>
            <div className='grid gap-2 grid-cols-2'>
              <RadioButton
                name='type'
                value='expense'
                onChange={handleChange}
                text='Expense'
              />
              <RadioButton
                name='type'
                value='income'
                onChange={handleChange}
                text='Income'
              />
            </div>
            <Input
              type='text'
              name='category'
              value={modalValues.category}
              handleOnChange={handleChange}
              placeholder='Category (Ex. Shopping)'
              required
            />
            <Input
              type='number'
              name='amount'
              value={modalValues.amount}
              handleOnChange={handleChange}
              placeholder='Amount (Ex. 35.99)'
              required
            />
            <TextArea
              name='description'
              value={modalValues.description}
              handleOnChange={handleChange}
              required
            />
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
