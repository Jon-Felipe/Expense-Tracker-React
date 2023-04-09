import React from 'react';

type Props = {
  LabelText: string;
  type: React.HTMLInputTypeAttribute;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ LabelText, type, name, value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor=''>{LabelText}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
