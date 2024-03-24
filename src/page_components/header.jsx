import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import LogIn from "../logIn/LogIn";
import { IoMagnet } from "react-icons/io5";
import { motion } from "framer-motion";
import { GlobalContext } from "../Context";


const uiConatiner = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    delayChildren: 0.4,
    staggerChildren: 0.3,
  },
};
const item = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export default function Header() {
  const {
    JobLi,
    isMenu,
    handleLoginButtonClick,
    handleCancel,
    isScrolled,
    setIsScrolled,
    isLoginFormOpen,
    toggleMenu,handleSignUpButtonClick
  } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 950) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <header class="text-slate-800">
        <div
          className={
            isScrolled
              ? "bg-blue-400 transition-all ease-linear fixed z-10 right-0 left-0 top-0"
              : "bg-gradient-to-tr from-pink-400 shadow via-orange-200 to-orange-50 transition-all ease-linear  fixed z-10 right-0 left-0 top-0"
          }
        >
          <div class=" flex p-5 flex-row items-center justify-between relative">
            <a class="flex title-font font-medium items-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl font-serif">Clone remotive</span>
            </a>
            <nav class="md:ml-auto  items-center  text-base hidden md:flex">
              <a class="mr-5 inline-flex text-gray-900 group/first ">
                Find Remote Jobs
                {/* <i class="fa-solid fa-angle-down"></i> */}
                <span className="p-2">
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
                <div className="shadow-md hidden group-hover/first:block text-orange-950 absolute z-10 bg-sky-200  capitalize lg:left-2/7 top-12 rounded px-1 py-2">
                  <ul className=" *:p-1">
                    <li className="hover:text-orange-800">job search tips </li>
                    <li className="hover:text-orange-800">webinar</li>
                    <li className="hover:text-orange-800">about us </li>
                  </ul>
                </div>
              </a>
              <a class="mr-5 inline-flex hover:text-gray-900 group/second">
                Resources
                <span className="p-2">
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
                <div className="shadow-md hidden transition-all duration-300 ease-in-out group-hover/second:block text-orange-950 absolute z-10 bg-sky-200 capitalize lg:left-3/ top-12 rounded px-1 py-2">
                  <ul className=" *:p-1">
                    <li className="hover:text-orange-800">Publilc api </li>
                    <li className="hover:text-orange-800">
                      search by skill & location
                    </li>
                    <li className="hover:text-orange-800">search by company</li>
                  </ul>
                </div>
              </a>
            </nav>
            <div className="md:block hidden *:bg-sky-100 ">
              <button
                onClick={handleLoginButtonClick}
                class="hover:ring-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 m-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Log In
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <button
                onClick={handleSignUpButtonClick}
                class="hover:ring-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 m-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Sign up
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <Link
                to={"/Home"}
                class="hover:ring-1  inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                For Employers
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <button
              className="relative group rounded bg-sky-800 text-white "
              onClick={() => toggleMenu()}
            >
              <svg
                className="md:hidden float-right m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>

              {isMenu && (
                <div className="absolute rounded right-8 top-10 *:text-slate-50 bg-sky-800 p-2 group-focus:block hidden">
                  <motion.ul
                    variants={uiConatiner}
                    initial="hidden"
                    animate="visible"
                    className="*:text-start *:p-1 *:capitalize w-24 text-slate-800"
                  >
                    <motion.li
                      whileHover={{ x: 4 }}
                      variants={item}
                      className="hover:text-sky-300 "
                    >
                      <a>home</a>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 4 }}
                      variants={item}
                      className="hover:text-sky-300 "
                    >
                      <a>podcast</a>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 4 }}
                      variants={item}
                      className="hover:text-sky-300"
                    >
                      <a>blog</a>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 4 }}
                      variants={item}
                      className="hover:text-sky-300"
                    >
                      <a>constact us</a>
                    </motion.li>
                  </motion.ul>
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="flex mt-20 mb-10 py-8 text-wrap flex-col ">
          <div className="text-center my-14 md:mx-16 mx-2">
            <h1 className="font-bold font-riot text-4xl">
              Find your dream remote job without the hassle
            </h1>
            <p className="text-center mt-2">
              OGT is where top talents go to easily access active and fully
              remote job opportunities from vetted tech companies.
            </p>
            <p>
              Unlock 26,736 additional remote jobs with{" "}
              <a className="underline">OGT Accelerator</a>
            </p>
          </div>
          <div className="mt-4 mb-11 sm:mx-4 md:ml-40 md:mr-10 lg:mr-72 lg:ml-96">
            <ul className="*:rounded-full *:border *:bg-sky-100 *:border-slate-600  *:capitalize *:text-slate-900 *:m-1 *:px-2 *:py-0.5 *:inline-block">
              {JobLi.map((job) => (
                <li className="bg-blue-200">{job}</li>
              ))}
            </ul>
          </div>
        </div>

        {isLoginFormOpen && (
          <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-65 z-10">
            <LogIn onCancel={handleCancel} />
          </div>
        )}
      </header>
    </>
  );
}
