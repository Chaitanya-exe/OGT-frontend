import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalContext } from "../Context";
import Content from "../logIn/Content";
import { RiMessage3Fill } from "react-icons/ri";
import Dashboard from "../Dashboard/Dashboard";

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

export default function Header({ text = "OGT", speed = "1000" ,showChats,setShowChats,isScrolled,setIsScrolled}) {
  const {
    
    handleLoginButtonClick,
    handleCancel,
   
    isLoginFormOpen,
    handleSignUpButtonClick,
    isUserLoggedIn,
  } = useContext(GlobalContext);

  const [isMenu, setIsMenu] = useState(false);


  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

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
      <header className="">
          <div class=" flex p-5 items-center justify-between relative">
            <Link
              to="/home"
              className="text-3xl font-lexend font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-600 "
            >
              O G T
            </Link>

            <nav class="md:ml-auto  items-center  text-base hidden md:flex justify-between space-x-6">
              <div onClick={() => setShowChats(!showChats)}>
                <RiMessage3Fill className="size-5 text-slate-700 inline-flex mr-1 mb-1 align-middle" />
                Messages
              </div>

              <a class="mr-5 inline-flex text-gray-900 group/first ">
                Contact us
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
                  <ul className=" *:p-1 *:block">
                    <Link
                      to="/contactDetails"
                      className="hover:text-orange-800"
                    >
                      Contact details
                    </Link>
                    <Link to="/aboutUs" className="hover:text-orange-800">
                      about us{" "}
                    </Link>
                  </ul>
                </div>
              </a>
              <a class="mr-5 inline-flex hover:text-gray-900 group/second">
                Search by
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
                    <li className="hover:text-orange-800">skill</li>
                    <li className="hover:text-orange-800">company</li>
                  </ul>
                </div>
              </a>
            </nav>

            {isUserLoggedIn ? (
              <Dashboard />
            ) : (
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

                <Link
                  to={"/newAccount"}
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
                </Link>
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
            )}

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

        {isLoginFormOpen && (
          <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-black/80 z-10">
            <Content onCancel={handleCancel} />
          </div>
        )}
      </header>
    </>
  );
}
