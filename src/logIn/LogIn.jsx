import React from "react";
import { Link } from "react-router-dom";
import { PiHandWavingBold } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";
import { IoSparkles } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
const LogIn = ({ onCancel }) => {
  return (
    <>
      <div className=" mx-auto w-fit bg-blue-300 z-50 shadow rounded-2xl overflow-hidden my text-center text-slate-700  ">
        <div className="px-9 font-light tracking-tight">
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl w-full tracking-wider my-4 font-semibold font-riot capitalize ">
              ogt
            </h1>
            <button className="" onClick={onCancel}>
              <MdCancel className="size-6" />
            </button>
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
              <Link className="underline underline-offset-2 pr-1" to="/landing">
                Join Ogt Acceletor{" "}
              </Link>{" "}
              to get access today!
            </p>
          </div>
        </div>

        <form className="my-10 px-8 ">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              className="peer bg-transparent w-full border-b-2 border-slate-800 focus:border-pink-800 placeholder-transparent h-10 text-gray-800 focus:outline-none "
              placeholder="Email your address"
            />
            <label
              for="email"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 
    peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
            >
              Email address
            </label>
          </div>
          <div className="relative mt-8">
            <input
              id="password"
              type="password"
              name="password"
              className="peer bg-transparent  w-full placeholder-transparent h-10 border-b-2 
 border-slate-800 text-slate-800 focus:outline-none focus:border-pink-800"
              placeholder="password"
            />
            <label
              for="password"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
     peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 
     peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div>
            <button className="button px-7 w-full rounded-lg py-2 mt-6 hover:bg-slate-100 font-semibold hover:border border-slate-950 hover:text-slate-950">
              Log In
            </button>
            <Link
              to="/reset"
              className="text-xs float-start cursor-pointer py-2"
            >
              Reset password
            </Link>
          </div>
          <div className="mt-16 -mb-12 text-center ">
            <p className="tracking-tight font-thin ">
              Are you a hiring manager?
            </p>
            <Link
              to={"/form"}
              className="underline  cursor-pointer hover:text-gray-500 hover:no-underline"
            >
              Post a job here{" "}
            </Link>
          </div>
        </form>

        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#64b5f6"
            fill-opacity="1.6"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,181.3C672,192,768,256,864,256C960,256,1056,192,1152,186.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LogIn;
