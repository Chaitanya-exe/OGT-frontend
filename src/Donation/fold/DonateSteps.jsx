import React from 'react'
import Left from './Left'
import Right from './Right'
import { TbArrowCurveRight } from "react-icons/tb";


const DonateSteps = () => {
  return (
    <div className='flex space-x-10 justify-center w-screen'>
      <Left/>
      <div className='relative'>

      <TbArrowCurveRight className='size-10 rotate-45 bottom-11 right-0 text-sky-900 absolute'/>
      </div>

      <Right />
      
    </div>
  )
}

export default DonateSteps
