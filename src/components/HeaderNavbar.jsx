  import React, { useState } from 'react';
  import Logo from '../assets/Logo.svg';
  import { IoSearch } from "react-icons/io5";
  import { Menu, X } from 'lucide-react';
  import { Link } from 'react-router-dom';

  // Import modal
  import InputSearchModal from "./InputSearchModal";

  const HeaderNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    return (
      <div className='container'>
        {/* Search Modal Component */}
        <InputSearchModal open={openSearch} onClose={() => setOpenSearch(false)} />

        <nav>
          <div className='flex items-center justify-between p-6 relative'>
            {/* Left section */}
            <div className='flex items-center gap-5'>
              <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className='text-white w-6 h-6' /> : <Menu className='text-white w-6 h-6' />}
              </div>
              <img src={Logo} className='w-[5.5rem] lg:w-[9.5rem]' alt="Logo" />
            </div>

            {/* Mobile right */}
            <div className='flex md:hidden items-center gap-5'>
              <select defaultValue="Pick a text editor" className="bg-transparent text-white w-[100px] border-white border p-1 rounded">
                <option disabled>Pick a text editor</option>
                <option>VScode</option>
                <option>Other</option>
              </select>
              <Link to="/login">
                <button className='bg-red-600 text-white px-4 py-2 rounded'>Войти</button>
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className='hidden md:flex items-center gap-8 text-white'>
              <li className='text-xl hover:text-gray-300 cursor-pointer'>Главное</li>
              <li className='text-xl hover:text-gray-300 cursor-pointer'>Каналы</li>
              <li className='text-xl hover:text-gray-300 cursor-pointer'>Спорт</li>

              {/* Search Icon */}
              <li
                className='text-xl hover:text-gray-300 cursor-pointer'
                onClick={() => setOpenSearch(true)}
              >
                <IoSearch />
              </li>
            </ul>

            {/* Desktop right */}
            <div className='hidden md:flex items-center gap-5'>
              <select defaultValue="Pick a text editor" className="bg-transparent text-white w-[150px] border-white border p-1 rounded">
                <option disabled>Pick a text editor</option>
                <option>VScode</option>
                <option>Other</option>
              </select>
              <Link to="/login">
                <button className='bg-red-600 text-white px-4 py-2 rounded'>Войти</button>
              </Link>
            </div>
          </div>

          <div className='flex items-center md:hidden mt-2'>
            <input 
              type="text"
              onChange={(e) => setOpenSearch(true) || setOpenSearch(e.target.value)}
              placeholder="search . . ." 
              className='p-2 rounded-sm w-full text-white border-2 border-base-300 bg-black focus:outline-none'
            />
            <IoSearch 
              className='text-xl hover:text-gray-300 -ml-10 cursor-pointer'
              onClick={() => setOpenSearch(true)}
            />
          </div>

          {/* Mobile menu */}
  {/* Mobile menu */}
{/* Mobile menu overlay */}
{isOpen && (
  <>
    {/* Dark overlay */}
    <div 
      className="fixed inset-0 bg-opacity-50 z-40" 
      onClick={() => setIsOpen(false)}
    ></div>

    {/* Sliding menu */}
    <div className="fixed top-0 left-0 w-[60%] h-full bg-black shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
         style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <X className="text-white w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      {/* Menu items */}
      <ul className="flex flex-col gap-6 px-5 text-white text-xl">
        <li className="hover:text-gray-300 cursor-pointer">Главное</li>
        <li className="hover:text-gray-300 cursor-pointer">Каналы</li>
        <li className="hover:text-gray-300 cursor-pointer">Спорт</li>
        <li className="hover:text-gray-300 cursor-pointer">Контакты</li>
      </ul>
    </div>
  </>
)}

        </nav>
      </div>
    );
  };

  export default HeaderNavbar;
