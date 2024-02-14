import React,{useState} from 'react'

export default function Tabs(){
    const [toggleState,setToggleState] =useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
  return (
      <>
    <div className='m-6' >
      <div className='text-center m-6'>
        <h1 className=' font-riot text-2xl capitalize m-2'>how it works</h1>
        <span className='rounded-full relative w-full h-1 inline-block bg-slate-200'>
            <span className={toggleState==1 ?'rounded-full absolute w-1/3 h-1 inline-block transition-all bg-orange-400 left-0':toggleState===2 ?'rounded-full absolute w-1/3 h-1 inline-block transition-all  bg-orange-400 left-1/3' :'rounded-full absolute w-1/3 h-1 inline-block transition-all bg-orange-400 right-0 '}></span>

        </span>
      </div>
<div className='md:flex  space-'>
      <div className=' md:w-1/3'  onClick={() => toggleTab(1)} >
        <div className='m-3 py-3'>
            <h1 className={toggleState===1 ? 'text-xl font-riot capitalize text-orange-500 ':'text-xl font-riot capitalize  text-opacity-55'}>1. post your job</h1>
            <p className={toggleState===1 ? '' : 'text-opacity-45 text-orange-900'}>
            Tell us more about whom you are looking for. 
            </p>
        </div>
        <div className={toggleState===1 ? 'm-3 block flex-grow-0' : 'hidden'}>
            <p className='text-s'>
            Create a Custom Configuration File: First, create a tailwind.config.js file in your project's root directory if you haven't already done so.

Extend the Transform Configuration: In your tailwind.config.js file, you can extend the transform property with your custom values. Here's an example:  
            </p>
        </div>

      </div>

     
      <div className=' md:w-1/3'  onClick={() => toggleTab(2)} >
        <div className='m-3 py-3'>
            <h1 className={toggleState===2 ? 'text-xl font-riot capitalize text-orange-500 ':'text-xl font-riot capitalize  text-opacity-55'}>1. post your job</h1>
            <p className={toggleState===2 ? '' : 'text-opacity-45 text-orange-900'}>
            Tell us more about whom you are looking for. 
            </p>
        </div>
        <div className={toggleState===2 ? 'm-3 block flex-grow-0' : 'hidden'}>
            <p className='text-s'>
            Create a Custom Configuration File: First, create a tailwind.config.js file in your project's root directory if you haven't already done so.

Extend the Transform Configuration: In your tailwind.config.js file, you can extend the transform property with your custom values. Here's an example:  
            </p>
        </div>

      </div>
      <div className=' md:w-1/3'  onClick={() => toggleTab(3)} >
        <div className='m-3 py-3'>
            <h1 className={toggleState===3 ? 'text-xl font-riot capitalize text-orange-500 ':'text-xl font-riot capitalize  text-opacity-55'}>1. post your job</h1>
            <p className={toggleState===3 ? '' : 'text-opacity-45 text-orange-900'}>
            Tell us more about whom you are looking for. 
            </p>
        </div>
        <div className={toggleState===3 ? 'm-3 block flex-grow-0' : 'hidden'}>
            <p className='text-s'>
            Create a Custom Configuration File: First, create a tailwind.config.js file in your project's root directory if you haven't already done so.

Extend the Transform Configuration: In your tailwind.config.js file, you can extend the transform property with your custom values. Here's an example:  
            </p>
        </div>

      </div>

      



      </div>


      </div>
      <div className='flex content-center mt-24'>

      <button className='button mx-auto '>post a job from $ 299/mon</button>
      </div>

      </>
     
  )
}


