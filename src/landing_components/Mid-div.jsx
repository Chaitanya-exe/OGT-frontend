import React from "react";
import { FcHome } from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiMeditation } from "react-icons/gi";
import { GiHighFive } from "react-icons/gi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      // delay:0.4,
      type: "spring",
      stiffness: 100,
      damping: 25,
      // staggerChildren:0.2
    },
  },
};

export default function Middiv() {
  return (
    <div className=" p-1 group/one  text-wrap ">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className=" my-4 mx-16 p-2 md:w-1/  *:duration-1000 *:ease-linear *:bg-cyan-50  *:shadow *:rounded-lg *:p-3 *:m-4 *:text-slate-900"
      >
        <motion.div
          variants={variants}
          className="delay-100  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            the only{" "}
            <span className="text-blue-700">
              remote-focused,worldwide job board
            </span>{" "}
            for tech startups.
          </h1>
          <p className=" leading-tight">
            When Stripe, Zapier or Shopify hire remotely, they turn to Remotive.
            We specialize in serving tech startups. Are we any good at it? We’ve
            been in business for nine years and won tons of awards
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <FcHome />
              <LiaCertificateSolid />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-200  group-hover/one:opacity-100  hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            hire{" "}
            <span className="text-blue-700">top talent without the fuss.</span>{" "}
            Easily post jobs that convert.
          </h1>
          <p className="leading-tight">
            When Stripe, Zapier or Shopify hire remotely, they turn to Remotive.
            We specialize in serving tech startups. Are we any good at it? We’ve
            been in business for nine years and won tons of awards
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiMeditation className="text-green-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-300  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            Not just another faceless mega corporation or careless recruiter.
          </h1>
          <p className=" leading-tight">
            When Stripe, Zapier or Shopify hire remotely, they turn to Remotive.
            We specialize in serving tech startups. Are we any good at it? We’ve
            been in business for nine years and won tons of awards
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiHighFive className="text-red-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="  delay-500  group-hover/one:opacity-100 hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400 "
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            Plugged into the remote work community since 2014.
          </h1>
          <p className=" leading-tight">
            When Stripe, Zapier or Shopify hire remotely, they turn to Remotive.
            We specialize in serving tech startups. Are we any good at it? We’ve
            been in business for nine years and won tons of awards
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <BsEmojiHeartEyesFill className="text-yellow-400 bg-red-600 rounded-full" />
            </span>
          </p>
        </motion.div>
      </motion.div>
      <div className="group/two flex justify-center mt-20 pb-6">
        <div className="flex flex-col space-y-2">
          <button className="button">get qualfied candidates</button>
          <button className="rounded-lg  border space-y-3 cursor-pointer border-red-300 border-r-2 p-2 w-fi">
            <h1 className="text-red-400 uppercase">product hunt</h1>

            <div class="flex items-center justify-center  space-x-2">
              <svg
                class="w-4 h-4 text-red-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-red-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-red-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-red-400 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 ms-1 text-gray-100 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <p className="tracking-wide text-xs text-blue-950">
              (5.0) based on 77 views
            </p>
          </button>
        </div>
      </div>

      <div className="">
        <span className="w-44 h-44 animate-move  rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900  blur-sm "></span>
        <span className="w-40 h-40  animate-move2  absolute left-1/4 top-96 rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900 opacity-20 -z-0   blur-sm "></span>
        <span className="w-32 h-32 animate-move2 absolute right-44 top-44 rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900 opacity-20 -z-0  blur-sm "></span>
      </div>
    </div>
  );
}
