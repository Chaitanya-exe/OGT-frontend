import React from 'react'
import { PiHandWavingBold } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";
import { IoSparkles } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import LogIn from './LogIn';

const Content = ({onCancel}) => {

  return (
    <>
          <div className=" mx-auto  w-1/3 bg-slate-100 z-50 shadow rounded-2xl overflow-hidden text-center text-sky-900 ">

     <div className="px-9 font-light trackin-tight">
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl ogt w-full tracking-wider my-4 font-semibold font-riot capitalize ">
              O G T
            </h1>
            <motion.button
              initial={{ rotate: 0, opacity: 1 }}
              whileHover={{ rotate: "90deg", opacity: 0.8 }}
              className=""
              onClick={onCancel}
            >
              <MdCancel className="size-7 hover:opacity-90" />
            </motion.button>
          </div>
          <p className="">You have to be<span className='font-semibold'> Logged In</span> to use the platform</p>
         
        </div>

        <LogIn onCancel={onCancel} />
        </div>

    </>
  )
}

export default Content
