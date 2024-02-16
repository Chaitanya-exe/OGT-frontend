import React from 'react'

const Billing = () => {
  return (
    <>
    <div className='m-8 pt-5'>

<h1 className='text-2xl capitalize pb-4 font-bold font-rio'>Billing information</h1>
<p className=' italic text-sm font-thin tracking-wide'>You'll be able to provide a full invoicing address when processing payment at the last step.</p>
<div className='mt-7 space-y-4'>

<h2 className='text-slate-800 font-semibold '>Billing email*</h2>
<p className=' italic text-sm font-thin tracking-wide'>Your name and email will <span className='text-slate-900 font-semibold '>NOT</span> be publicly displayed. We will use it to send you confirmation email and links to manage your job listing.</p>
<input type='checkbox' name='contact email' id='checkbox' className='mr-3 rounded-sm checked:bg-orange-500' />
<label for="checkbox">Use my contact email above</label>
</div>
    </div>
    </>
  )
}

export default Billing
