import React from 'react'
import Left from './Left'
import Right from './Right'
import { TbArrowCurveRight } from "react-icons/tb";
import CTA from './CTA';
import {motion} from "framer-motion"


const DonateSteps = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1 , delay:0.3}}
     className='flex mt-6 bg-gradient-to-br from-purple-100/50 via-orange-100/50 to-blue-100/20 px-8 py-16 items-center justify-center w-full'>
    <motion.div 
    initial={{x:-100}}
    whileInView={{x:0}} 
    transition={{type:"spring",stiffness:150}}
    className=' flex -space-x-6 group'>
      <Left/>
      <div className='relative z-10 group-hover:-translate-y-4 opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-200'>

      <TbArrowCurveRight className='size-10 rotate-45 bottom-0 text-sky-900 absolute'/>
      </div>

      <Right />

    </motion.div>
      <CTA />
      
    </motion.div>
  )
}

export default DonateSteps
