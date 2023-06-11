import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center justify-center flex-col'>
            <p  className='uppercase font-bold p-2   text-[#00df9a]'>Growing with data analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl text-bold md:py-6'>Growing with data</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>Fast, flexible financing for <span className='text-gray-500'><Typed
                 className='text-gray-500'
                    strings={['BTB', 'BTC','SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    /></span></p>     
            </div>
            <p  className='  text-gray-500 font-bold mx-6 md:text-2xl md:mx-3 text-xl'>Monitor Your data analytics to increase revenue for BTB, BTC & SAAS platfoem</p>
            <button className='bg-[#00df9a] font-bold hover:bg-sky-300 text-black w-[200px] hover:text-white rounded-md p-2  my-6 sm:w-[250px] sm:p-3 sm:font-medium md:hover:text-[#00df9a] md:w-[300px] md:p-4 md:hover:bg-white md:font-bold'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero