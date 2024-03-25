import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import {motion,AnimatePresence} from "framer-motion"
import { FcDonate } from "react-icons/fc";
import {Link} from "react-router-dom"
import { MdCancelPresentation } from "react-icons/md";



const variants = {
    initial:{
       x:50,
       opacity:0
    },
    animate:{
       x:0,
       opacity:1,
       transition:{
              type:"spring",
              stiffness:120,
              damping:13,
              duration:1,
              staggerChildren:0.3
          }
      
    }

}
const Donate_box = () => {
    const {setShowDonationBox} = useContext(GlobalContext)
  return (
    <AnimatePresence>

    <motion.div variants={variants} initial="initial" animate="animate"
        className='fixed z-10   rounded-l-lg right-0 top-28 p-1 bg-white w-1/5 h-44'>
    <div
     className='flex-col rounded h-full space-y-2 justify-between hover:bg-slate-50 p-2'>

<div className='text-lg'>
<div className='flex items-start'>
    <h2>"Your donation is an investment in the future.
    </h2>
    <button
     onClick={()=>setShowDonationBox(false)}
    >

<MdCancelPresentation className='size-6 ' />
    </button>

</div>
<p className='text-sm text-center'>support us ! </p>

</div>
<motion.div variants={variants} className='space-y-3'>

<FcDonate className='block mx-auto size-6' />
<div className='block mx-auto text-center py-1 px-2'>

<Link to="/donate" className='capitalize rounded-sm  bg-sky-800 text-white py-2 hover:bg-white hover:text-sky-800 hover:font-bold hover:border border-sky-800 hover:shadow-black/20 shadow px-3'>Donate now</Link>
</div>
</motion.div>
    </div>
      
    </motion.div>
    </AnimatePresence>
  )
}

export default Donate_box
