import React, { useContext } from 'react'
import { GlobalContext } from '../Context'
import {motion,AnimatePresence} from "framer-motion"
import { FcDonate } from "react-icons/fc";


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
        className='fixed  rounded-l-lg right-0 top-28 p-1 bg-white w-1/5 h-44'>
    <motion.div variants={variants}
     className='flex-col h-full space-y-2 justify-between bg-red-200 p-2'>

    <h2>"Your donation is an investment in the future.<span className='textxl'>"</span></h2>
<FcDonate className='block mx-auto size-6' />
<button className='capitalize rounded-sm mx-auto block bg-sky-800 text-white py-1 px-2'>Donate now</button>
    </motion.div>
      
    </motion.div>
    <div>

    </div>
    </AnimatePresence>
  )
}

export default Donate_box
