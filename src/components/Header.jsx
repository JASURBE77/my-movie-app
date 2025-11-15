import React from 'react'
import HeaderNavbar from './HeaderNavbar';

const Header = () => {

  return (
    <header>
      <div className='bg-no-repeat bg-cover md:h-[772px] h-[650px] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/UZ-ru-20251027-TRIFECTA-perspective_bcee40fe-ae89-46a1-b0a1-8eee2007f808_large.jpg")]'>
        {/* Gradient tepadan pastga body bilan ulanadi */}
        <div className="h-full w-full bg-gradient-to-b from-black via-black/40 to-black">
          <div className="container mx-auto">
            {/* Nav */}
            <HeaderNavbar />
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
                    className='p-2 rounded-sm w-full sm:w-[400px] text-white border-2 border-base-300 bg-black focus:outline-none'
                  />
                  <button className='bg-red-600 border-none text-white btn'>
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
