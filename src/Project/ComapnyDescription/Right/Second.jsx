import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";


const Second = () => {
  return (
    <div className=' space-y-4'>
    <div className='text-sm space-y-3 bg-white/85 rounded-xl p-5 mx-' >
        <button className='border border-black/45 px-2 rounded-full'>Software Development</button>
        <div className='flex *:space-y-1 justify-between border-b-2 pb-3 *:text-xs *:uppercase'>
        <div>
            <p>salary</p>
            <p className='bg-blue-300 rounded-full p-0.5'>💸 $90 - $150 /HOU..</p>
        </div>
        <div>
        Remote location
            <div className='pl-2'>
            <p> 📍 USA timezones</p>
            <p>  📍 European timezones</p>
            </div>
        </div>

        </div>
        <div className='flex *:space-y-0.5 justify-between *:text-xs *:uppercase'>
        <div>
            <p>job type</p>
            <p className=''>Contract</p>
        </div>
        <div>
           <p>Posted</p>
           <p>1 wk ago</p>
        </div>

        </div>
    </div>
    <div className='flex items-center p-2 rounded-lg bg-sky-950 text-slate-50 hover:bg-white hover:border hover:text-blue-950 hover:border-slate-800'>
    <button className='flex-grow '>
    Apply for this position
    </button>
    <IoMdArrowRoundForward className='size-5'/>

 </div>
 <div className='space-y-3'>
    <p>
        
👋	Please mention that you come from <span className='font-semibold'>OGT</span> when applying for this job.
    </p>
    <p>‼	Beware of <span className='font-semibold'>scams!</span> When applying for jobs, you should NEVER have to pay anything. Learn more.</p>
 </div>

      
    </div>
  )
}

export default Second
