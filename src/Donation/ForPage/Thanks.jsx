import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../img/Animation - 1711473552874.json';
import {motion} from "framer-motion"

const Thanks = () => {
  return (
    <motion.div 
     initial={{opacity:0 ,x:"100%"}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:"-100%"}}
    transition={{duration:0.3 , type:"spring" , stiffness:200,damping:40}}
    className='flex-col space-y-12 w-screen text-sky-900 items-center justify-center *:text-3xl font-semibold'>
      <p>Thank You for Your Generous Donation!</p>
      <div className=' flex-grow'>
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height="55vh"
        width="49vw"
        
      />

      </div>
    </motion.div>
  )
}

export default Thanks
