import React, { useContext, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa";
import { SiYoutubetv } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FcGlobe } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import Form_right from "./Form_right";
import { GlobalContext } from "../Context";

const Help = () => {
  const {
    jobTitle,
    ComapanyName,
    selectedOption,
    locationArr,
    logoImg,
    employmentType,
    location,
    project
  } = useContext(GlobalContext);
  return (
    <>
      {/* //      <div className='bg-blue-100 fixed right-0 top-0 h-screen mt-16 w-1/5 '>
// <Form_right selectedOption={selectedOption}/>
//  </div>

//       <div className="m-8 py-8 text-slate-900">
//         <h1 className="text-xl pb-4 font-bold font-rio">
//           Help your ad
//           <span className="text-blue-600"> stand out</span>
//         </h1>
//         <div className="flex-col pb-4 cursor-pointer space-y-1 font-thin ">
//           <div className="flex justify-between  items-center ">
//             <label className="flex justify-between w-full items-center" for="1">
//               <div> */}
      {/* //                 <input */}
      {/* //                   className="mr-5"
//                   type="checkbox"
//                   id="1"
//                   name="location"
//                   value="Worldwide"
//                 />
//                 Featured email placement to 273,000+ readers
//               </div> */}

      {/* //               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-slate-800">(+ $49)</p>
//                 <p className="p-2 rounded-full bg-indigo-200">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div> */}
      {/* //           <div className="flex justify-between items-center "> */}
      {/* //             <label className="flex justify-between w-full items-center" for="2">
//               <div>
//                 <input */}
      {/* //                   className="mr-5"
//                   type="checkbox"
//                   id="2"
//                   name="location"
//                   value="USA only"
//                 />
//                 Highlight with your company's brand color! ➡️{" "}
//                 <span className="w-16 h-4 ml-1 border-black bg-indigo-200 border ring-4 ring-blue-100 inline-flex"></span>
//               </div> */}
      {/* //               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-orange-950">(+ $49)</p>
//                 <p className="p-2 rounded-full bg-indigo-200">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div> */}
      {/* //           <div className="flex justify-between items-center ">
//             <label className="flex justify-between w-full items-center" for="3">
//               <div className="">
//                 <input */}
      {/* //                   className="mr-5"
//                   type="checkbox"
//                   id="3"
//                   name="location"
//                   value="Other location requirements"
//                 />
//                 🎯 Block applicants that don’t strictly fit your specified
//                 location
//                 <FaQuestionCircle className="inline-flex mx-2 text-blue-600" />
//               </div>
//               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-slate-800">(+ $49)</p>
//                 <p className="p-2 invisible rounded-full bg-indigo-200 ">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div> */}
      {/* //         </div> */}

      {/* //         <div className="flex-col cursor-pointer space-y-1 font-thin ">
//           <div className="flex justify-between  items-center ">
//             <label */}
      {/* //               className="flex justify-between w-full items-center"
//               for="-1"
//             > */}
      {/* //               <div >
//                 <input */}
      {/* //                 onChange={handleRadioAmount}
//                   className="mr-5"
//                   type="radio"
//                   id="-1"
//                   name="option"
//                   value="49"
//                 />
//                 Featured email placement to 273,000+ readers
//               </div>

//               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-slate-800">(+ $49)</p>
//                 <p className="p-2 rounded-full bg-indigo-200">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div>
//           <div className="flex justify-between items-center ">
//             <label */}
      {/* //               className="flex justify-between w-full items-center" */}
      {/* //               for="-2"
//             >
//               <div>
//                 <input */}
      {/* //                    onChange={handleRadioAmount}
//                   className="mr-5"
//                   type="radio"
//                   id="-2"
//                   name="option"
//                   value="56"
//                 />
//                 Highlight with your company's brand color! ➡️{" "}
//                 <span className="w-16 h-4 ml-1 border-black bg-orange-200 border ring-4 ring-gray-300 inline-flex"></span>
//               </div>
//               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-slate-800">(+ $56)</p>
//                 <p className="p-2 rounded-full bg-indigo-200">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div>
//           <div className="flex justify-between items-center ">
//             <label */}
      {/* //               className="flex justify-between w-full items-center"
//               for="-3"
//             >
//               <div className="">
//                 <input */}
      {/* //                   onChange={handleRadioAmount}
//                   className="mr-5"
//                   type="radio"
//                   id="-3"
//                   name="option"
//                   value="40"
//                 />
//                 🎯 Block applicants that don’t strictly fit your specified
//                 location
//                 <FaQuestionCircle className="inline-flex mx-2 text-orange-500" />
//               </div>
//               <div className="flex  space-x-3 items-center">
//                 <p className="font-semibold text-slate-800">(+ $40)</p>
//                 <p className="p-2 rounded-full bg-indigo-200">
//                   Get 2X visibility
//                 </p>
//               </div>
//             </label>
//           </div> */}
      {/* //         </div>
//       </div>
//       <div>
//         <div className="text-center px-12 *:my-8 mb-40 mt-24">
//             <h1 className="text-3xl font-riot">Great companies hire with Remotive</h1>

//             <div className="flex flex-grow md:mx-6 items-center justify-evenly  mt-1">
//                 <IconContext.Provider value={{color:"black",size: "2.7rem"}}>
//                 <FaShopify />
//                 <FaStripe />
//                 <SiYoutubetv  className="size-16"/>
//                 <FaGithub />
//                 </IconContext.Provider>

//                 </div>
//         </div> */}
      <div className="fixed bottom-0 right-0 left-0  bg-gradient-to-bl  from-indigo-200 to-pink-100 via-blue-100 shadow-slate-900 shadow-2xl">
        <div className="group p-2 text-sm flex justify-center  ">
          <div className="group-hover:bg-opacity-70  border border-slate-800 items-center flex p-1 my-1 rounded-lg bg-blue-100">
            <div className="w-14 h-14 bg-zinc-200 border-black border flex justify-center items-center overflow-hidden rounded-full">
              {logoImg && <img src={URL.createObjectURL(logoImg)} alt="no" />}
            </div>
            <div>
              <div className="mb-1 hover:opacity-60 flex *:font-semibold capitalize *:mx-2">
                <h1>{project.title === "" ? "Your Job" : project.title}</h1>
                <li className=" list-disc">
                  {project.postedBy === "" ? "Your Company" : project.postedBy}
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
                  {/* {location === undefined ? (locationArr.join(" , ")) : location} */}
                </h3>
              </div>
            </div>

            <div className="ml-9 py-1 font-semibold text-xs px-3 text-red-950 rounded-full mr-2 bg-red-300">
              Featured
            </div>
          </div>
        </div>
      </div>
      {/* // </div> */}
    </>
  );
};

export default Help;
