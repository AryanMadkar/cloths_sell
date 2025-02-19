import React from 'react'
import Hero from '../components/homecomp/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[90vh]'>
      <Hero/>
      <LatestCollection/>
    </div>
  )
}

export default Home