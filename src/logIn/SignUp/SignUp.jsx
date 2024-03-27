import React, { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../../Context";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const SignUp = ({ onCancel }) => {
  const { JobLi } = useContext(GlobalContext);
  return (
    <>
      <div className=" p-4 border rounded-lg">
      <div className="divide-y-2 space-y-4 w-fit p-4 ">

        <div className="flex justify-between">
          <h2 className="text-xl font-semibold tracking-wide">Create Account</h2>
          <Link to="/logIn" className="text-sm underline text-purple-600 ">Sign In</Link>
        </div>
        <div className="text-slate-600 pt-6 grid grid-cols-2 gap-4">
          <label className="capitalize font-semibold" > name
            <input
            id="name"
            type="text" name="name" 
            placeholder="your name"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize font-semibold" > Email Address
            <input
            id="EmailAddress"
            type="email" name="Email Address" 
            placeholder="Your email address"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize font-semibold" >Password
            <input
            id="Password"
            type="password" name="Password" 
            placeholder="Enter Password"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize font-semibold" >Confirm Password
            <input
            id="confirm password"
            type="text" name="confirm password" 
            placeholder="Confirm Password"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize col-span-2  font-semibold" >Mobile Number
            <input
            id="name"
            type="tel" name="name" 
            placeholder="your name"
            className="border col-span-2  p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className=" align-baseli content-center">

          <input type="checkbox" className="size-5 mr-3"></input>
          I agree to <span className="text-purple-600">Terms & Conditions</span>
          </label>
        </div>
      </div>
      </div>

      {/* <AnimatePresence>
        <motion.div
          variants={backdrop}
          initial="hidden"
          exit="hidden"
          animate="visible"
          className="w-2/3 md:w-1/3 bg-blue-300 z-50 shadow rounded-3xl overflow-hidden my text-center text-slate-800 "
        >
          <div className="px-9 font-light tracking-tight">
            <div className="flex items-baseline space-x-1">
              <h1 className="text-4xl tracking-wider my-4 font-semibold font-riot capitalize ">
                Get daily remote job opportunities in your inbox
              </h1>
              <button onClick={onCancel}>
                <MdCancel className="size-7 hover:opacity-60" />
              </button>
            </div>
            <p className="mt-6">
              No middlemen, no spam, no infinite scrolling.Get relevant job
              opportunities, one email at a time.
            </p>
            <div className="space-y-4 my-5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="off"
                placeholder="Enter email address"
                className="w-full border focus:text-sm focus:font-normal bg-white p-2 text-xs  focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
              />
              <select
                name="cars"
                className="w-full bg-white border p-2 text-xs focus:font-normal focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
              >
                {JobLi.map((category) => (
                  <option value="">{category}</option>
                ))}
              </select>
              <button className="button w-full">SignUp for free</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence> */}
    </>
  );
};

export default SignUp;
