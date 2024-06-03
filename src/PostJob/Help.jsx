import React, { useContext, useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { GlobalContext } from "../Context";

const Help = () => {
  const {
  
    logoImg,
   
    project
  } = useContext(GlobalContext);
  return (
    <>
      
      <div className="fixed bottom-0 right-0 left-0   bg-gradient-to-bl  from-indigo-200 to-pink-100 via-blue-100 shadow-slate-900 shadow-2xl">
        <div className="group p-2 text-sm flex justify-center  ">
          <div className="group-hover:bg-opacity-70 w-1/3 border border-slate-800 items-center flex p-1 my-1 rounded-lg bg-blue-100">
            {/* <div className="w-14 h-14 bg-zinc-200 border-black border flex justify-center items-center overflow-hidden rounded-full">
              {logoImg && <img src={URL.createObjectURL(logoImg)} alt="no" />}
            </div> */}
            <div className="flex-1">
              <div className="mb-1 hover:opacity-60 flex *:font-semibold capitalize *:mx-2">
                <h1>{project.title === "" ? "Your Job" : project.title}</h1>
                <li className=" list-disc">
                  {project.company === "" ? "Your Company" : project.company}
                </li>
              </div>
              <div className="flex *:rounded-full mb-1 *:p-1 *:px-2 *:mx-2">
                <h3 className="border  border-purple-500">
                  {project.category === ""
                    ? "Software Development"
                    : project.category}
                </h3>
                <h3 className="bg-sky-800 flex text-slate-100 rounded-lg w-fit">
                  <FcMoneyTransfer className="size-4 mx-0.5 mt-1 inline-flex" />
                  {project.price === "" ? "$" : "$" + project.price}
                </h3>
                <h3 className="bg-blue-200 truncate w- space-x-6 ">
                  <FcGlobe className="inline-flex size-5 mr-2  " />
                  {project.country === "" ? "India" : project.country}
                </h3>
              </div>
            </div>

            <div className="ml-9 py-1 font-semibold text-xs px-3 text-red-950 rounded-full mr-2 bg-red-300">
              Featured
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
