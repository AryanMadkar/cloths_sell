import React from 'react'
import Hero from '../components/homecomp/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/bestceller/Bestseller'
import Outpolicy from '../components/ourpollicy/Outpolicy'
import Newsletterbox from '../components/newsletter/Newsletterbox'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[90vh]'>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Outpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home