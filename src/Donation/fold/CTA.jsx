import React, { useContext } from "react";
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import { GlobalContext } from "../../Context";

const hehe ={
    initial:{
        opacity:0,
        x:12
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            staggerChildren:0.7
        }
    }
}

const CTA = () => {
    const {setStepCount} = useContext(GlobalContext)
  return (
    <motion.div
    initial={{x:300}}
    whileInView={{x:0}}
    transition={{duration:0.4 ,type:"spring", stiffness:90 ,damping:20}}

     className=" border-r-2 border rounded-xl h-fit p-2 flex-gro w-1/3 mx-12">
      <motion.div
       variants={hehe}  initial="initial" animate="animate"
       className="p-3 bg-red-100 rounded-md space-y-4">
      <div className="text-center space-y-1">
        <h1 className="text-3xl">🌟 Help us continue to grow and thrive! 🌟</h1>
        <h2 className="text-sm">💖 Every donation, no matter the size, makes a difference. 💖</h2>

      </div>
        <motion.ul variants={hehe}  className="px-8 list-disc space-y-2">
        <h1 className="font-semibold">Ways You Can Help:</h1>
          <li>Make a one-time donation</li>
          <li>Set up a monthly contribution</li>
          <li>Share OGT with friends and family</li>
        </motion.ul>
        <Link to="/donate" onClick={() => setStepCount(1)} className='capitalize group rounded-sm block w-fit mx-auto bg-indigo-600 text-white py-2 hover:bg-white hover:text-indigo-600 hover:font-bold hover:border border-indigo-600 hover:shadow-black/20 shadow px-3'>Donate now</Link>
      </motion.div>
    </motion.div>
  );
};

export default CTA;
