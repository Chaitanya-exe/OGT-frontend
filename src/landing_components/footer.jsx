import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineDriveFolderUpload, MdOutlineMailOutline } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import {Link} from "react-router-dom"



import { FaCode } from "react-icons/fa";


const Footer = ({route}) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 1000,
    });
  };
  return (
    <>
      <div className=" text-slate-800 mt-8">
        <div className="flex flex-col items-center space-y-7 md:flex-row md:items-baseline flex-wrap justify-between p-1 mx-6 pb-16 ">
          <div>
            <h1 className="footer-gradient font-semibold uppercase">
              help and support
            </h1>
            <ul className=" *:cursor-pointer space-y-2 *:text-sm font-thin flex-col flex py-1">
              <Link to="/aboutUs" className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Why <span className="footer-ogt">OGT </span>?</Link>
              <a  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Email <MdOutlineMailOutline className="inline-flex size-4 mb-0.5"/> </a>
              <Link to="/FAQ's"  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>FAQs <FaQuestionCircle className="inline-flex size-4 mb-0.5"/></Link>
            </ul>
          </div>
          <div>
            <h1 className="footer-gradient font-semibold uppercase">
              Resources
            </h1>
            <ul className=" *:cursor-pointer space-y-2 *:text-sm font-thin flex-col flex py-1">

              <Link to="/Free-courses"  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Free courses <FaCode  className="inline-flex size-4 mb-0.5"  /></Link>
              <a  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Blogs & Articles <GrArticle className="inline-flex size-4 mb-0.5"/> </a>
            </ul>
          </div>
          <div>
            <h1 className="footer-gradient font-semibold uppercase">
              Join the community
            </h1>
            <ul className=" *:cursor-pointer space-y-2 *:text-sm font-thin flex-col flex py-1">

              <a  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Instagram <FaInstagram  className="inline-flex size-4 mb-0.5"  /></a>
              <a  className={route === 'home' ? "text-slate-900" : "text-slate-100"}>Discord <RiDiscordLine className="inline-flex size-5 mb-0.5"/> </a>
            </ul>
          </div>
        </div>
          <div className={` ${route === 'home' ? null : "bg-gradient-to-r"} py-4 flex items-center justify-center font-thin"`}>
            <p className={`"m-1 ${route == 'aboutus' || route=='Faqs' ? "text-slate-100" : "text-slate-900"} "`}>&copy; 2024, made <span className="ogt ">O G T</span> with</p>
            <FaHeart className="text-red-600 mx-2 -mb-0.5" />
          </div>
          {/* <div className="flex flex-shrink justify-center p-3 *:m-3">
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <a className="hover:text-sky-800  text-slate-900 cursor-pointer">
                <FaLinkedin className="hover:size-7" />
              </a>
              <a className="hover:text-sky-800  text-slate-900 cursor-pointer">
                <FaTwitter className="hover:size-7" />
              </a>
              <a className="hover:text-sky-800  text-slate-900 cursor-pointer">
                <FaInstagramSquare className="hover:size-7" />
              </a>
              <a className="hover:text-sky-800   text-slate-900 cursor-pointer">
                <FaFacebook className="hover:size-7" />
              </a>
              <a className="hover:text-sky-800  text-slate-900  cursor-pointer">
                <FaTelegramPlane className="hover:size-7" />
              </a>
              <a className="hover:text-sky-800   text-slate-900 cursor-pointer">
                <IoMdMail className="hover:size-7" />
              </a>
            </IconContext.Provider>
          </div> */}
      </div>
      <div onClick={handleScrollToTop}>
        <FaArrowUpLong className="opacity-75 text-slate-900 hover:border border-y-blue-300 shadow-md shadow-slate-500 border-x-indigo-300 hover:opacity-100 m-3 size-10 fixed right-0 bottom-0 z-10 p-2 rounded-full hover:delay-150" />
      </div>
    </>
  );
};

export default Footer;
