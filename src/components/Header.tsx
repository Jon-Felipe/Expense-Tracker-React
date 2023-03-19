import React, { useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

// components
import NavLink from './NavLink';

const Header = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  return (
    <header className='h-20 flex items-center justify-between'>
      <div className='flex items-center justify-between w-11/12 max-w-screen-lg mx-auto'>
        <h1 className='text-3xl font-bold tracking-wide'>Expense Tracker</h1>

        {isAboveMediumScreen ? (
          <nav>
            <ul className='flex items-center gap-6'>
              <NavLink text='Home' />
              <NavLink text='About' />
              <NavLink text='Contact' />
            </ul>
          </nav>
        ) : (
          <div>
            <p className='text-4xl font-bold cursor-pointer'>x</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
