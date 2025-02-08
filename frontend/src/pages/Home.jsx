/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736867129397-b1a4071d70a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHx0cmFmZmljJTIwbGlnaHRzfGVufDB8fDB8fHww)] h-screen pt-5 flex justify-between flex-col w-ful'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md font-semibold mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home