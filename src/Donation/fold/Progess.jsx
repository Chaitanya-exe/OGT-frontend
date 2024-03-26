import React, { useContext } from 'react'
import { IoMdLock } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GlobalContext } from '../../Context';

const Progess = () => {
  const {StepCount} = useContext(GlobalContext)
  return (
    <div className={`flex p-6 py-4 bg-purple-500 *:text-white items-center ${StepCount >=1 ? "text-xl" : ""} `}>
        <h3 className="flex-grow text-start">Choose amount</h3>
        <div className="flex space-x-2 px-2 ">
          <IoMdLock />
          <FaRegCircle className={StepCount === 1 ?"bg-white rounded-full " : ""} />
          <FaRegCircle className={StepCount === 2 ?"bg-white rounded-full " : ""}  />
          <FaRegCircle className={StepCount === 3 ?"bg-white rounded-full " : ""}  />
          <FaArrowRightLong />
        </div>
      </div>
  )
}

export default Progess
