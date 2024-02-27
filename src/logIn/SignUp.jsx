import React from 'react'
import { MdCancel } from "react-icons/md";
import {motion,AnimatePresence} from "framer-motion"
const JobLi=["Software Development","Web Development","Design","Network Engineer","Database Administrator","Systems Administrator","Data Scientist","Security Analyst","UX/UI Designer","Cloud Engineer","Blockchain Developer","Cybersecurity Engineer","Machine Learning Engineer","AI Engineer","Project Manager","Technical Support Engineer","Business Analyst","IT Manager"]

const backdrop={
  hidden:{
    y:"-100vh",
    opacity: 0
  },
  visible :{
    y:"0",
    opacity:1,
    transition:{delay : 0.6}
  }
}

const SignUp = ({onCancel}) => {
  return (
    <>
    <AnimatePresence>
 <motion.div
 variants={backdrop} initial="hidden" exit="hidden" animate="visible"
  className="w-2/3 md:w-1/3 bg-blue-300 z-50 shadow rounded-3xl overflow-hidden my text-center text-slate-800 ">
        <div className="px-9 font-light tracking-tight">
          <div className="flex items-baseline space-x-1">
            <h1 className="text-4xl tracking-wider my-4 font-semibold font-riot capitalize ">
            Get daily remote job opportunities in your inbox
            </h1>
            <button onClick={onCancel} >
              <MdCancel className="size-7 hover:opacity-60" />
            </button>
          </div>
          <p className="mt-6">No middlemen, no spam, no infinite scrolling.Get relevant job opportunities, one email at a time.</p>
<div className='space-y-4 my-5'>
<input id='email' name='email' type='email' required autoComplete='off' placeholder='Enter email address'
className='w-full border focus:text-sm focus:font-normal bg-white p-2 text-xs  focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
<select name="cars" className='w-full bg-white border p-2 text-xs focus:font-normal focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md'>
    {JobLi.map((category)=>(
  <option value="">{category}</option>

    ))}
</select>
<button className='button w-full'>SignUp for free</button>
</div>
          </div>
          </motion.div>  

    </AnimatePresence>
    </>
  )
}

export default SignUp
