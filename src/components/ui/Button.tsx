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
      className='px-4 py-2 shadow rounded-lg bg-blue-500 text-white text-lg border
       border-blue-500 transition ease-in-out hover:bg-white hover:text-blue-500 duration-300'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
