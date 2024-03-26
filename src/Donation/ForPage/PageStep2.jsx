import React, { useContext, useState } from 'react'
import { TiVendorApple } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { RiPaypalFill } from "react-icons/ri";
import { SiVenmo } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import {motion} from "framer-motion"
import Progess from '../fold/Progess';
import { GlobalContext } from '../../Context';






const PageStep2 = () => {
    const {StepCount,setStepCount,choosenAmount} = useContext(GlobalContext)

    const [paymentOption,setPaymentOption] = useState(null)
    console.log(paymentOption)
  return (
    <motion.div
     initial={{opacity:0 ,x:"100%"}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:"-100%"}}
    // initial={{y:-18 , x:-190}}
    // whileHover={{y:-50 , x:0}}
    transition={{duration:0.3}}
     className="w-4/12 h-full text-center space-y-5 border rounded-lg overflow-hidden">

      <Progess />
      <div className='flex-col text-star space-y-3 *:shadow p-3 *:p-3 '>
<div onClick={()=>setPaymentOption("Pay")} className={`text-black/75 ${paymentOption === "Pay" ? "bg-purple-500 rounded-lg text-white" : "bg-slate-100"}`}><TiVendorApple className='inline-flex size-5'/> Pay</div>
<div  onClick={()=>setPaymentOption("GPay")} className={`text-black/65  ${paymentOption === "GPay" ? "bg-purple-500 rounded-lg text-white" : "bg-slate-100"}`}><FcGoogle className='inline-flex size-5'/> Pay</div>
<div  onClick={()=>setPaymentOption("PayPal")} className={`text-sky-950 font-semibold italic  ${paymentOption === "PayPal" ? "bg-purple-500 rounded-lg text-white" : "bg-slate-100"}`}><RiPaypalFill className='inline-flex size-5'/> Pay<span className='text-sky-500'>Pal</span></div>
<div  onClick={()=>setPaymentOption("Credit/debit card")} className={`text-black/75  ${paymentOption === "Credit/debit card" ? "bg-purple-500 rounded-lg text-white" : "bg-slate-100"}`} ><CiCreditCard1 className='inline-flex size-5'/> Credit/Debit card</div>
<div  onClick={()=>setPaymentOption("Bank transfer")} className={`text-black/75  ${paymentOption === "Bank transfer" ? "bg-purple-500 rounded-lg text-white" : "bg-slate-100"}`}><CiBank className='inline-flex size-5'/> Bank transfer</div>



      </div>
<div className="px-4 pb-5 space-y-3">

<button onClick={() => setStepCount(StepCount +1)} disabled={!choosenAmount} className="bg-orange-500 disabled:bg-orange-300  text-slate-100 p-2 w-full rounded-full">Next</button>
<button disabled={StepCount===0} onClick={() => setStepCount(StepCount - 1)} className="bg-orange-500 disabled:bg-orange-300  text-slate-100 p-2 w-full rounded-full">Prev</button>

</div>

    </motion.div>
  )
}

export default PageStep2
