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
          <div className=" mx-auto  w-fit bg-slate-100 z-50 shadow rounded-2xl overflow-hidden text-center text-sky-900 ">

     <div className="px-9 font-light trackin-tight">
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl w-full tracking-wider my-4 font-semibold font-riot capitalize ">
              ogt
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
          <p className="">Login to your account to post a project</p>
          <div className="mt-6">
            <p className=" flex justify-center items-center space-x-3">
              <PiHandWavingBold className="text-yellow-600 mr-2 size-4 " />
              Only paying users can Log In
              <GrPersonalComputer />
            </p>

            <p className="flex justify-center items-center space-x-2">
              <LuAlertTriangle className="mr-2 size-4 text-slate-950" />
              Non-paying users have no login/password on Remotive
              <GrPersonalComputer className="" />
            </p>
            <p className="flex justify-center items-baseline space-x-3">
              <IoSparkles className="text-red-600 size-4" />
              <Link className="underline underline-offset-2 pr-1" to="/">
                Join Ogt Acceletor{" "}
              </Link>{" "}
              to get access today!
            </p>
          </div>
        </div>

        <LogIn onCancel={onCancel} />
        </div>

    </>
  )
}

export default Content
