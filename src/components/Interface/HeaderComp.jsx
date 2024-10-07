import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as jwtdecode from 'jwt-decode';

const HeaderComp = () => {
  const [user, setUser] = useState();
  const [isUser, setIsUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the menu toggle

  const handleLogout = () => {
    setUser(null);
    setIsUser(false);
    Cookies.remove('authToken');
  };

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decoded = jwtdecode.jwtDecode(token);
      setUser(decoded);
      setIsUser(true);
    }
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='flex shadow-md py-4 px-4 sm:px-10 bg-black font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <Link href="#">
          <img src="/Logo.png" alt="TradeVista" className='w-20' />
        </Link>

        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className={`lg:flex gap-x-5 ${menuOpen ? 'block' : 'hidden'} lg:!block max-lg:fixed max-lg:bg-gray-800 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <ul className='lg:flex gap-x-5 max-lg:space-y-3'>
            <li className='max-lg:border-b border-white-300 max-lg:py-3 px-7'>
              <Link className='hover:text-[#007bff] text-white-500 block font-semibold text-[15px]' to={'/'} onClick={handleMenuToggle}>Home</Link>
            </li>
            <li className='max-lg:border-b border-white-300 max-lg:py-3 px-7'>
              <Link className='hover:text-[#007bff] text-white-500 block font-semibold text-[15px]' to={'/products'} onClick={handleMenuToggle}>Products</Link>
            </li>
            <li className='max-lg:border-b border-white-300 max-lg:py-3 px-7'>
              <Link className='hover:text-[#007bff] text-white-500 block font-semibold text-[15px]' to={'/about-us'} onClick={handleMenuToggle}>About</Link>
            </li>
            <li className='max-lg:border-b border-white-300 max-lg:py-3 px-7'>
              <Link className='hover:text-[#007bff] text-white-500 block font-semibold text-[15px]' to={'/contact-us'} onClick={handleMenuToggle}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* User Auth Buttons */}
        <div className='hidden lg:flex max-lg:ml-auto space-x-3'>
          {isUser ? (
            <div className='flex max-lg:ml-auto space-x-3'>
              <Link to={'/dashboard'} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>Dashboard</Link>
              <button onClick={handleLogout} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>Logout</button>
            </div>
          ) : (
            <div className='flex max-lg:ml-auto space-x-3'>
              <Link to={'/login'} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>Login</Link>
              <Link to={'/register'} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white'>Signup</Link>
            </div>
          )}
        </div>

        {/* Menu Button for mobile */}
        <button
          id="toggleOpen"
          className='lg:hidden'
          onClick={handleMenuToggle}
        >
          <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default HeaderComp;
