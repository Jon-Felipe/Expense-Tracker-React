import React from 'react';

type Props = {
  text: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
};

const Button = ({ text, type, onClick }: Props) => {
  return (
    <button
      type={type}
      className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
