import React from 'react';
import AnalyticsImage from './analytics.png';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             <img src={AnalyticsImage} alt="analyticsImage" className='p-4'/>
             <div className=' mt-5'>
                <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='font-bold text-xl'>Manage Data Analytics Centrally</h1>
                <p className='font-medium text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autesunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <div className='flex justify-center align-middle md:justify-start'>
                         <button className='flex justify-center text-center bg-black font-bold hover:bg-sky-300 text-[#00df9a] w-[200px] hover:text-white rounded-md p-2  my-6 sm:w-[250px] sm:p-3 sm:font-medium md:hover:text-[#00df9a] md:w-[300px] md:p-4 md:hover:bg-gray-600 md:font-bold'>Get Started</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Analytics