import React from 'react'

const Contact = () => {
  return (
    <>
      <form className='text-sm m-8 pt-5 *:my-3'>
    <div className='*:my-1'>

        <h1 className='text-2xl capitalize pb-4 font-bold font-rio'>contact information</h1>
         <h2 className='text-slate-800 font-semibold '>Your name*</h2>
<input id='email' name='email' type='text' required autoComplete='off' placeholder=''
className='w-full border text-slate-500 p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold'>Your email*</h2>
    <input id='email' name='email' type='email' autoComplete='off' required placeholder=''
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
    <p className=' italic text-sm font-thin tracking-wide'>Your name and email will <span className='text-slate-900 font-semibold '>NOT</span> be publicly displayed. We will use it to send you confirmation email and links to manage your job listing.
</p>

    </div>
    </form>
       
    </>
  )
}

export default Contact
