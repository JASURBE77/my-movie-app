import React, {useState} from 'react'
import Logo from '../assets/Logo.svg'
import { RiTranslate2 } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
             <nav>
                    <div className='flex items-center justify-between p-6 relative'>
                                              <div className='flex items-center gap-5'>
                        <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                          {isOpen ? <X className='text-white w-6 h-6' /> : <Menu className='text-white w-6 h-6' />}
                        </div>
                        <img src={Logo} className='w-[5.5rem] lg:w-[9.5rem]' alt="Logo" />
                      </div>
        
                      <div className='flex md:hidden items-center gap-5'>
                        <select defaultValue="Pick a text editor" className="bg-transparent text-white md:w-[150px] w-[100px] border-white border p-1 rounded">
                          <option disabled>Pick a text editor</option>
                          <option>VScode</option>
                          <option>Other</option>
                        </select>
                        <button className='bg-red-600 text-white px-4 py-2 rounded'>Войти</button>
                      </div>
        
                      <ul className='hidden md:flex items-center gap-8 text-white'>
                        <li className='text-xl hover:text-gray-300 cursor-pointer'>Главное</li>
                        <li className='text-xl hover:text-gray-300 cursor-pointer'>Каналы</li>
                        <li className='text-xl hover:text-gray-300 cursor-pointer'>Спорт</li>
                        <li className='text-xl hover:text-gray-300 cursor-pointer'><IoSearch /></li>
                      </ul>
        
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
                    <div className='flex items-center  md:hidden mt-2'>
                                                    <input 
                    type="text" 
                    placeholder="search . . ." 
                    className='p-2 rounded-sm w-full text-white border-2 border-base-300 bg-black focus:outline-none'
                  />
                  <IoSearch className='text-xl hover:text-gray-300 relative -ml-10 cursor-pointer' />

        
                    </div>
                      {isOpen && (
                        <div className='md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 gap-4 z-50'>
                          <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Главное</li>
                          <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Каналы</li>
                          <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Спорт</li>
                        </div>
                      )}
                    </nav>
    </div>
  )
}

export default HeaderNavbar