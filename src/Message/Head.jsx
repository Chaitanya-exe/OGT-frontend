import React, { useContext } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { GlobalContext } from '../Context';




const Head = () => {
  const {setShowChats} = useContext(GlobalContext)
  return (
    <div className='flex items-center justify-between'>
      <div className='w-12 h-12 border flex justify-center items-center rounded-full overflow-hidden'>
        <img className='' 
        src='' alt='hi'

        />
      </div>
      <p>Messaging</p>
      <div className='flex space-x-3 '>
      <FiMoreHorizontal  className='p-1 size-6 hover:bg-slate-200 rounded-full  '/>
      <FaEdit onClick={()=>{

      }} className='p-1 size-6 hover:bg-slate-200 rounded-full ' />
      <FaChevronDown onClick={()=>{setShowChats(false)}}
      className='hover:bg-slate-200 rounded-full p-1 size-6' />


      </div>
    </div>
  )
}

export default Head
