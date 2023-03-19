import React from 'react';

type Props = {
  text: string;
};

const NavLink = ({ text }: Props) => {
  return (
    <li className='text-xl tracking-wide cursor-pointer transition ease-in hover:scale-110 duration-200'>
      {text}
    </li>
  );
};

export default NavLink;
