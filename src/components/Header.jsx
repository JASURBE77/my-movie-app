import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { RiTranslate2 } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className='bg-no-repeat bg-cover md:h-[772px] h-[650px] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/UZ-ru-20251027-TRIFECTA-perspective_bcee40fe-ae89-46a1-b0a1-8eee2007f808_large.jpg")]'>
        {/* Gradient tepadan pastga body bilan ulanadi */}
        <div className="h-full w-full bg-gradient-to-b from-black via-black/40 to-black">
          <div className="container mx-auto">
            {/* Nav */}
            <nav className='flex items-center justify-between p-6 relative'>
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
                <button className='bg-red-600 text-white px-4 py-2 rounded'>Войти</button>
              </div>

              {isOpen && (
                <div className='md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 gap-4 z-50'>
                  <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Главное</li>
                  <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Каналы</li>
                  <li className='text-xl text-white hover:text-gray-300 list-none cursor-pointer'>Спорт</li>
                </div>
              )}
            </nav>

            {/* Hero section */}
            <div className='h-[550px] w-full flex flex-col justify-center'>
              <div className='w-[700px] max-[768px]:w-[500px] max-[520px]:w-fit mx-auto text-center'>
                <h1 className='text-6xl max-[768px]:text-3xl max-[520px]:text-2xl font-bold text-white mb-6'>
                  Фильмы, сериалы и многое другое без ограничений
                </h1>
                <p className='text-white mb-4'>
                  Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <input 
                    type="email" 
                    placeholder="Адрес электронной почты" 
                    className='p-2 rounded-sm w-full sm:w-[400px] text-white border-2 border-white'
                  />
                  <button className='bg-red-600 text-white btn'>
                    Начать смотреть
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
