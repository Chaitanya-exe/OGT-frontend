import React from 'react'
import Progess from './Progess'
import { TiVendorApple } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { RiPaypalFill } from "react-icons/ri";
import { SiVenmo } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import {motion} from "framer-motion"





const paymentOptions=[]

const RightDonateCard = () => {
  return (
    <motion.div
    initial={{y:-18 , x:-190}}
    whileHover={{y:-50 , x:0}}
    transition={{duration:0.3}}
     className="w-1/2 bg-white text-center space-y-5 border rounded-lg overflow-hidden">

      <Progess />
      <div className='flex-col text-star space-y-3 *:shadow *:bg-slate-100 p-3 *:p-3 '>
<div className='text-black/75'><TiVendorApple className='inline-flex size-5'/> Pay</div>
<div className='text-black/65'><FcGoogle className='inline-flex size-5'/> Pay</div>
<div className='text-sky-950 font-semibold italic'><RiPaypalFill className='inline-flex size-5'/> Pay<span className='text-sky-500'>Pal</span></div>
<div className='text-black/75'><CiCreditCard1 className='inline-flex size-5'/> Credit/Debit card</div>
<div className='text-black/75'><CiBank className='inline-flex size-5'/> Bank transfer</div>


      </div>

    </motion.div>
  )
}

export default RightDonateCard
