import React from 'react'
import { IoMdLock } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Progess = () => {
  return (
    <div className="flex p-2 py-4 bg-purple-500 *:text-white items-center">
        <h3 className="flex-grow text-start">Choose amount</h3>
        <div className="flex space-x-2 px-2 ">
          <IoMdLock />
          <FaRegCircle className="bg-white rounded-full " />
          <FaRegCircle />
          <FaRegCircle />
          <FaArrowRightLong />
        </div>
      </div>
  )
}

export default Progess
