import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className='h-20 flex items-center justify-between shadow'>
      <div className='flex items-center justify-between w-full max-w-screen-2xl mx-auto'>
        <h1 className='text-3xl font-bold tracking-wide'>Expense Tracker</h1>

        <nav>
          <ul className='flex items-center gap-6'>
            <NavLink text='Home' />
            <NavLink text='About' />
            <NavLink text='Contact' />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
