import React from "react";
import Nav from "../landing_components/Nav";
import Footer from "../page_components/Footer";
import { PiHandWavingBold } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";
import { IoSparkles } from "react-icons/io5";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <>
      <Nav />

      <div className=" mx-auto w-fit md:w-2/6 shadow rounded-2xl overflow-hidden my-32 text-center text-slate-700  ">
        {/* <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 390"><path fill="#ffccbc" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,149.3C672,139,768,85,864,101.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
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
        <div className="px-9 mt-10 flex-col flex text-start">
          <label className="text-orange-950" for="reset">
            Your Email
          </label>
          <input
            id="reset"
            name="new Password"
            type="email"
            className="border-4 focus:outline-none p-2 border-opacity-30  border-orange-300 rounded-lg h-9 mt-1 mb-10"
          />
        </div>
        <div className="px-9 flex justify-between items-baseline">
          <button className="bg-orange-950 text-white px-7  rounded-lg py-2 mt-6 hover:bg-orange-100 font-semibold hover:border border-orange-950 hover:text-orange-950">
            Confirm
          </button>
          <Link className="text-sm font-thin" to="/logIn">
            back to Login
          </Link>
        </div>
        <div className="my-16  text-center ">
          <p className="tracking-tight font-thin ">Are you a hiring manager?</p>
          <a className="underline  cursor-pointer hover:text-gray-500 hover:no-underline">
            Post a job here
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reset;
