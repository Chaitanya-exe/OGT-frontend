import React from 'react'

const Head = () => {
  return (
    <>
    <nav >
    <div className='h-16 z-10 fixed top-0 right-0 left-0 shadow shadow-gray-300 bg-orange-100'>
    <div className='flex mx-5 p-4'>
        <div className=''>logo</div>
        <div className='mx-auto '>
            <ol type='1' className='flex space-x-6'>
                <li>1. create your list</li>
                <li>2. preview</li>
                <li>3. confirm & pay</li>
            </ol>
        </div>

    </div>

    </div>
    <div className='mx-4 p-7 mt-28 bg-orange-200 rounded-xl'>
    <h1 className='text-4xl text-orange-950 font-riot py-4 '>
    Every remote job posted here will be 
    <span className='text-orange-500'> shared on Remotive's network</span>
    </h1>
    <div>
        <ul className=''>

            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 3,000,000+ </span>unique yearly visits on remotive.com</li>
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 3,500,000+ </span> monthly impressions on Google Jobs</li>
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 264,000+ </span> subscribers on our daily email job digest</li>
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 320,000+ </span>followers on LinkedIn</li>
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 26,000+ </span>followers on twitter</li>
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-orange-950'></span>
            <span className='font-semibold'> 3,500+ </span>members in our private Slack Community</li>
        </ul>
    </div>

    </div>
    </nav>
      
    </>
  )
}

export default Head
