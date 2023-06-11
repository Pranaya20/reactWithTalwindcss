import React from 'react'

function NewSletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
         <div className='lg:col-span-2 py-10'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Want tips & tricks to optimize your flow?</h1>
            <p>sign up to our newsletter and stay up to date.</p>
         </div>
         <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                <input type='email' placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black'/>
                <button className='ml-4 bg-[#00df9a] font-bold hover:bg-sky-300 text-black w-[200px] hover:text-white rounded-md p-2  my-6 sm:w-[250px] sm:p-3 sm:font-medium md:hover:text-[#00df9a] md:w-[300px] md:p-4 md:hover:bg-white md:font-bold'>Notify me</button>
            </div>
            <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>private policy.</span> </p>
         </div>
      </div>
    </div>
  )
}

export default NewSletter