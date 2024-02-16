import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa";
import { SiYoutubetv } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FcGlobe } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";



const Help = () => {
  return (
    <>
      <div className="m-8 py-8">
        <h1 className="text-xl pb-4 font-bold font-rio">
          Help your ad
          <span className="text-orange-500"> stand out</span>
        </h1>
        <div className="flex-col pb-4 cursor-pointer space-y-1 font-thin ">
          <div className="flex justify-between  items-center ">
            <label className="flex justify-between w-full items-center" for="1">
              <div>
                <input
                  className="mr-5"
                  type="checkbox"
                  id="1"
                  name="location"
                  value="Worldwide"
                />
                Featured email placement to 273,000+ readers
              </div>

              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
          <div className="flex justify-between items-center ">
            <label className="flex justify-between w-full items-center" for="2">
              <div>
                <input
                  className="mr-5"
                  type="checkbox"
                  id="2"
                  name="location"
                  value="USA only"
                />
                Highlight with your company's brand color! ➡️{" "}
                <span className="w-16 h-4 ml-1 border-black bg-orange-200 border ring-4 ring-gray-300 inline-flex"></span>
              </div>
              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
          <div className="flex justify-between items-center ">
            <label className="flex justify-between w-full items-center" for="3">
              <div className="">
                <input
                  className="mr-5"
                  type="checkbox"
                  id="3"
                  name="location"
                  value="Other location requirements"
                />
                🎯 Block applicants that don’t strictly fit your specified
                location
                <FaQuestionCircle className="inline-flex mx-2 text-orange-500" />
              </div>
              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 invisible rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="flex-col cursor-pointer space-y-1 font-thin ">
          <div className="flex justify-between  items-center ">
            <label
              className="flex justify-between w-full items-center"
              for="-1"
            >
              <div>
                <input
                  className="mr-5"
                  type="radio"
                  id="-1"
                  name="location"
                  value="Worldwide"
                />
                Featured email placement to 273,000+ readers
              </div>

              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
          <div className="flex justify-between items-center ">
            <label
              className="flex justify-between w-full items-center"
              for="-2"
            >
              <div>
                <input
                  className="mr-5"
                  type="radio"
                  id="-2"
                  name="location"
                  value="USA only"
                />
                Highlight with your company's brand color! ➡️{" "}
                <span className="w-16 h-4 ml-1 border-black bg-orange-200 border ring-4 ring-gray-300 inline-flex"></span>
              </div>
              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
          <div className="flex justify-between items-center ">
            <label
              className="flex justify-between w-full items-center"
              for="-3"
            >
              <div className="">
                <input
                  className="mr-5"
                  type="radio"
                  id="-3"
                  name="location"
                  value="Other location requirements"
                />
                🎯 Block applicants that don’t strictly fit your specified
                location
                <FaQuestionCircle className="inline-flex mx-2 text-orange-500" />
              </div>
              <div className="flex  space-x-3 items-center">
                <p className="font-semibold text-orange-950">(+ $49)</p>
                <p className="p-2 rounded-full bg-orange-200">
                  Get 2X visibility
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center px-12 *:my-8 mb-40 mt-24">
            <h1 className="text-3xl font-riot text-orange-950">Great companies hire with Remotive</h1>

            <div className="flex flex-grow md:mx-6 items-center justify-evenly  mt-1">
                <IconContext.Provider value={{color:"black",size: "2.7rem"}}>
                <FaShopify />
                <FaStripe />
                <SiYoutubetv  className="size-16"/>
                <FaGithub />
                </IconContext.Provider>

                </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 bg-slate-50 shadow-slate-900 shadow-2xl">
            
        <div className="group p-2 text-sm flex justify-center ">
            
            <div className='group-hover:bg-opacity-70 items-center flex p-1 border my-1 rounded-lg bg-orange-200'>
            <div className="w-14 h-14 bg-zinc-200 border-black border overflow-hidden rounded-full"></div>
            <div>
            <div className="mb-1 hover:opacity-60 flex *:font-semibold capitalize *:mx-2">
            <h1>Your job title</h1>
            <li className=" list-disc">Your Company</li>
            </div>
             <div className="flex *:rounded-full mb-1 *:p-1 *:px-2 *:mx-2">
            <h3 className="border border-gray-600">Software Development</h3>
            <h3 className="bg-orange-950 rounded-lg w-9 text-orange-100"><FcMoneyTransfer className="size-4 ml-0.5 mt-1" /></h3>
            <h3 className="bg-zinc-100"><FcGlobe className="inline-flex size-5 mr-2" />
Worldwide</h3>
            </div>

            </div>

            <div className="ml-9 py-1 font-semibold text-xs px-3 text-red-950 rounded-full mr-2 bg-red-300">Featured</div>
    </div>
    
    </div>
        </div>
      </div>
    </>
  );
};

export default Help;
