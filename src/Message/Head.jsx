import React from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";




const Head = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-12 h-12 border flex justify-center items-center rounded-full overflow-hidden'>
        <img className='' 
        src='' alt='hi'

        />
      </div>
      <p>Messaging</p>
      <div className='flex space-x-3'>
      <FiMoreHorizontal />
      <FaEdit />
      <FaChevronDown />


      </div>
    </div>
  )
}

export default Head
