import React from 'react'
import Header from '../components/Header'
import MovieSwiperSlideNew from '../components/MovieSwiperSlideNew'
const Home = () => {
  return (
    <div>
              <Header />
             <div className='relative -mt-10'>
               <MovieSwiperSlideNew />
             </div>
    </div>
  )
}

export default Home