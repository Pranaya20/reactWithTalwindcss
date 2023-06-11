import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  text-gray-300'>
        <div>
            <h1 className='w-full text-3xl text-[#00df9a] font-bold '>React.</h1>
            <p className='py-4'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</p>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-12'>         
             <div>
                <div className='font-medium text-gray-400'>Solutions</div>
                    <ul>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Analysis</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
             </div>

             <div>
                <div className='font-medium text-gray-400'>Support</div>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guide</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
             </div>

             <div>
                <div className='font-medium text-gray-400'>Company</div>
                    <ul>
                        <li className='py-2 text-sm'>Company</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
             </div>

             <div>
                <div className='font-medium text-gray-400'>Legal</div>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
             </div>
        </div>
             
     </div>
  )
}

export default Footer