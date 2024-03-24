import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { RiChatCheckFill } from "react-icons/ri";
import exampleImage from "./img/mockup.webp";
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
        <div className="mt-14 font-riot text-3xl  text-center">
          <h1>
            No more hassle or guesswork in
            <span className="text-blue-500"> hiring great team</span> members
            remotely
          </h1>
        </div>
        <div className="md:flex mt-10 *:bg-white *:m-2 *:rounded-3xl">
          <div className="p-8 items-center flex flex-col">
            <FaUserCheck className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">No account required</h1>
            <p className="text-slate-800">
              Manage your job(s) via a link we’ll email you upon posting.
              You/your team can work together, hassle-free & password-free.
            </p>
          </div>
          <div className="p-8 items-center flex flex-col">
            <BiImport className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">No account required</h1>
            <p className="text-slate-800">
              Manage your job(s) via a link we’ll email you upon posting.
              You/your team can work together, hassle-free & password-free.
            </p>
          </div>
          <div className=" p-8 items-center flex flex-col">
            <SiBookstack className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">No account required</h1>
            <p className="text-slate-800">
              Manage your job(s) via a link we’ll email you upon posting.
              You/your team can work together, hassle-free & password-free.
            </p>
          </div>
          <div className="p-8 items-center flex flex-col">
            <RiChatCheckFill className="m-2 text-6xl" />
            <h1 className="tracking-wide text-lg">No account required</h1>
            <p className="text-slate-800">
              Manage your job(s) via a link we’ll email you upon posting.
              You/your team can work together, hassle-free & password-free.
            </p>
          </div>
        </div>
      </div>

      <div className="group">
        <div className=" text-center mt-16 items-center flex flex-col justify-center content-center">
          <h1 className="font-riot tracking-wide text-3xl m-10 ">
            <span className="text-blue-500">Fish </span>where the fish are
          </h1>
          <p className="m-6 text-slate-800">
            Broadcasted through Remotive network{" "}
          </p>
          <motion.span
            variants={ballVariants}
            animate="animationOne"
            className="w-4 h-4 animate-drp inline-block bg-orange-400 rounded-full "
          ></motion.span>
        </div>
      </div>
    </>
  );
}
