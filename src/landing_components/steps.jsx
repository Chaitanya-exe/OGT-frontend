import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { RiChatCheckFill } from "react-icons/ri";
// import exampleImage from "./img/mockup.webp";
import { IoLocation } from "react-icons/io5";
import { motion } from "framer-motion";

const ballVariants = {
  animationOne: {
    y: [0, 30],
    x: [-20, 20],
    // scale:1.2,
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

export default function Step() {
  return (
    <>
      <div className=" p-7 text-sky-950  ">
        <div className="mt-1 font-riot text-3xl  text-center">
          <h1>
            O G T, where finding Developers is a
            <span className="text-blue-500"> real Breeze</span>
          </h1>
        </div>
        <div className="md:flex mt-10 *:bg-white *:m-2 *:rounded-3xl">
          <div className="p-8 items-center flex flex-col">
            <FaUserCheck className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">Register Easily</h1>
            <p className="text-slate-800">
            Click ,Choose ,Connect. Join global Development network and unleash your potential
            </p>
          </div>
          <div className="p-8 items-center flex flex-col">
            <BiImport className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">No limitations</h1>
            <p className="text-slate-800">
            World is your oyster!  Find or offer any Development service, anywhere. We connect you with endless opportunities.
            </p>
          </div>
          <div className=" p-8 items-center flex flex-col">
            <SiBookstack className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">Ease Of Multiplicity</h1>
            <p className="text-slate-800">
            Fill your pipeline! Post and manage multiple projects easily, find the best talent faster.
            </p>
          </div>
          <div className="p-8 items-center flex flex-col">
            <RiChatCheckFill className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">We're Here </h1>
            <p className="text-slate-800">
            Need help? We're here! Easy to reach, always happy to answer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
