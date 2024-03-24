import React, { useContext } from "react";
import { FcGlobe } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
import { GlobalContext } from "../Context";

const variant = {
  animate: {
    rotate: "-45deg",
    scale: 1.4,
  },
};
const MotionLink = motion(Link)
 
export default function Jobs() {
   const {data} = useContext(GlobalContext)
  
  return (
    <div >
      {data.map((job, index) => (
        <div className="group text-sm ">
          <div
            key={index}
            className={
              index < Math.ceil(data.length / 2)
                ? "group-hover:h-24 ease-in-out group-hover:bg-opacity-70  items-center flex p-1 border my-1 rounded-lg bg-gradient-to-l from-blue-100 to-pink-100"
                : "group-hover:h-24 ease-in-out group-hover:bg-opacity-70 items-center flex p-1 border my-1 rounded-lg bg-gradient-to-l from-purple-100 to-orange-100"
            }
          >
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <img
                className="w-15 h-15  object-cover object-center"
                src={job.imgPath}
              />
            </div>
            <div>
              <div className="group-hover:text-lg mb-1 hover:opacity-60  flex *:font-semibold capitalize *:mx-2">
                <h1 className="font-Montserrat">{job.title}</h1>
                <h1 className=" list-disc">
                  <spa className="inline-block mx-1 h-2 w-2 bg-slate-800 rounded-full"></spa>
                  {job.company}
                </h1>
              </div>
              <div className="flex *:rounded-full mb-1 *:p-1 *:px-3 *:mx-2">
                <h1 className="border my-auto border-purple-500">
                  {job.stream}
                </h1>
                <h1 className="bg-sky-800  text-slate-100">
                  <FcMoneyTransfer className="size-4 ml-0.5 inline-flex mr-2" />
                  {job.salary}
                </h1>
                <h1 className="bg-blue-200 rounded-md">
                  <FcGlobe className="inline-flex size-5 mr-2" />
                  {job.country}
                </h1>
              </div>
            </div>

            <div className="flex space-x-8 items-center ml-auto mr-2">
              <h1 className="mr-3">{job.timeOfPost}</h1>
              <div className="group-hover:flex space-x-6 hidden *:rounded-xl *:p-2 *:px-3 *:mx-2">
                <Link to="/project" className="bg-sky-950 text-slate-50 hover:bg-white hover:border hover:text-blue-950 hover:border-slate-800">
                  Apply
                </Link>
                <MotionLink
                to="/project"
                  variants={variant}
                  className="flex group/btn text-nowrap items-center border border-slate-800 hover:opacity-55"
                >
                  See More
                  <motion.svg
                    variants={variant}
                    whileHover="animate"
                    className="group-hover/btn:-rotate-45 font-extralight size-5 "
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </motion.svg>
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
