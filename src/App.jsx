import React from 'react'
import Header from './components/Header'
import MovieSwiperSlideNew from './components/MovieSwiperSlideNew'
import { Outlet } from 'react-router-dom'
import HeaderNavbar from './components/HeaderNavbar'

const App = () => {
  return (
    <div className='bg-black'>
      <HeaderNavbar />
      <Outlet />
    </div>
  )
}

export default App