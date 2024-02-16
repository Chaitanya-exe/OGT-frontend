import React from "react";
import { Link } from "react-router-dom";

import { PiHandWavingBold } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";
import { IoSparkles } from "react-icons/io5";
import Nav from "../landing_components/Nav";
import Footer from "../page_components/Footer";

const LogIn = () => {
  return (
    <>
      <Nav className="" />
      <div className=" mx-auto w-fit md:w-2/6 shadow rounded-2xl overflow-hidden my-32 text-center text-slate-700  ">
        {/* <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 390"
        >
          <path
            fill="#ffccbc"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,149.3C672,139,768,85,864,101.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        <div className="px-9 font-light tracking-tight">
          <h1 className="text-4xl tracking-wider my-4 text-orange-500 font-riot capitalize ">
            ogt accelerator account
          </h1>
          <p className="">Login to your account to unlock 10x more jobs!</p>
          <div className="mt-6">
            <p className=" flex justify-center items-baseline space-x-3">
              <PiHandWavingBold className="text-yellow-400 mr-2 size-4 " />
              Only paying users can Log In
              <GrPersonalComputer />
            </p>

            <p className="flex justify-center items-baseline space-x-2">
              <LuAlertTriangle className="mr-2 size-4" />
              Non-paying users have no login/password on Remotive
              <GrPersonalComputer className="" />
            </p>
            <p className="flex justify-center items-baseline space-x-3">
              <IoSparkles className="text-red-400 size-4" />
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
              className="peer w-full border-b-2 border-orange-300 focus:border-pink-800 placeholder-transparent h-10 text-gray-600 focus:outline-none "
              placeholder="Email your address"
            />
            <label
              for="email"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
    peer-placeholder-shown:text-base peer-placeholder-shown:text-orange-500 peer-placeholder-shown:top-2 
    peer-focus:-top-3.5 peer-focus:text-orange-300 peer-focus:text-sm"
            >
              Email address
            </label>
 
 

          </div>
          <div className="relative mt-8">
            <input
              id="password"
              type="password"
              name="password"
              className="peer w-full placeholder-transparent h-10 border-b-2 
 border-orange-300 text-slate-800 focus:outline-none focus:border-pink-800"
              placeholder="password"
            />
            <label
              for="password"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
     peer-placeholder-shown:text-base peer-placeholder-shown:text-orange-500 peer-placeholder-shown:top-2 
     peer-focus:-top-3.5 peer-focus:text-orange-300 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div>
            <button className="bg-orange-950 text-white px-7 w-full rounded-lg py-2 mt-6 hover:bg-orange-100 font-semibold hover:border border-orange-950 hover:text-orange-950">
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
            <Link to={"/form"} className="underline  cursor-pointer hover:text-gray-500 hover:no-underline">
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
            fill="#ffccbc"
            fill-opacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,181.3C672,192,768,256,864,256C960,256,1056,192,1152,186.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
