import React from 'react';
import User from './User.svg';

function Cards() {
  return (
    <div className='bg-white w-full px-4 py-[10rem]'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 sm:space-'>
           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer sm:mt-20'>
                <img src={User} alt="userImage" className='mx-auto w-20 mt-[-6rem]' />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-base text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Grand user</p>
                    <p className='py-2 border-b mx-8 '>send up to 2 GB </p>
                </div>
                <div className='flex justify-center items-center'>
                   <button className=' bg-[#00df9a] font-bold  text-black w-[200px]  rounded-md p-2  my-6 sm:w-[200px] sm:p-3 sm:font-medium  md:w-[300px] md:p-4 md:font-bold'>Start Trial</button>
                </div>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer sm:mt-20'>
                <img src={User} alt="userImage" className='mx-auto w-20 mt-[-6rem]' />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-base text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Grand user</p>
                    <p className='py-2 border-b mx-8 '>send up to 2 GB </p>
                </div>
                <div className='flex justify-center items-center'>
                   <button className=' bg-black font-bold  text-[#00df9a] w-[200px]  rounded-md p-2  my-6 sm:w-[200px] sm:p-3 sm:font-medium  md:w-[300px] md:p-4 md:font-bold'>Start Trial</button>
                </div>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer sm:mt-20'>
                <img src={User} alt="userImage" className='mx-auto w-20 mt-[-6rem]' />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-base text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Grand user</p>
                    <p className='py-2 border-b mx-8 '>send up to 2 GB </p>
                </div>
                <div className='flex justify-center items-center'>
                   <button className=' bg-[#00df9a] font-bold  text-black w-[200px]  rounded-md p-2  my-6 sm:w-[200px] sm:p-3 sm:font-medium  md:w-[300px] md:p-4 md:font-bold'>Start Trial</button>
                </div>
           </div>
       </div>

       
    </div>
  )
}

export default Cards