import React from "react";
import Nav from "../landing_components/Nav";
import Footer from "../page_components/Footer";
import { PiHandWavingBold } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";
import { IoSparkles } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Reset = () => {
  const navigation = useNavigate();

  const handleConfirm = () => {
    navigation(-1);
  };
  return (
    <>
      <Nav />

      <div className=" mx-auto w-fit bg-blue-300 z-50 shadow rounded-2xl overflow-hidden my-28 text-center text-slate-700  ">
        <div className="px-9 font-light tracking-tight">
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl tracking-wider my-4 font-semibold font-riot capitalize ">
              ogt accelerator account
            </h1>
          </div>
          <p className="">Login to your account to unlock 10x more jobs!</p>
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

        <div className="px-9 mt-10 flex-col flex text-start">
          <label className="text-orange-950" for="reset">
            Your Email
          </label>
          <input
            id="reset"
            name="new Password"
            type="email"
            required
            className="border-4 focus:outline-none p-2 border-opacity-30  border-orange-300 rounded-lg h-11 mt-1 mb-3"
          />
        </div>
        <div className="px-9 flex justify-between items-baseline">
          <button
            onClick={handleConfirm}
            className="bg-orange-950 text-white px-7  rounded-lg py-2 mt-6 hover:bg-orange-100 font-semibold hover:border border-orange-950 hover:text-orange-950"
          >
            Confirm
          </button>
        </div>
        <div className="my-12  text-center ">
          <p className="tracking-tight font-thin ">Are you a hiring manager?</p>
          <Link
            to={"/Form"}
            className="underline  cursor-pointer hover:text-gray-500 hover:no-underline"
          >
            Post a job here
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reset;
