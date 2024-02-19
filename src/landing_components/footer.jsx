import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from 'react-icons';
import { FaArrowUpLong } from "react-icons/fa6";


const Footer = () => {
  
        const handleScrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1000,

          });
        }
  return (
    <>

    <div className=' text-slate-800 mt-8'>
      <div className='flex flex-col items-center space-y-4 md:flex-row md:items-baseline flex-wrap justify-between p-1 mx-6 py-8 '>
        <div>
            <h1 className='text-blue-900 font-semibold uppercase'>Hiring remotely</h1>
            <ul className=' *:cursor-pointer *:text-sm font-thin flex-col flex py-1'>
                <a>
                Why Remotive?
                </a>
                <a>
                Post a Remote Job
                </a>
                <a>
                Remote Hiring Tips
                </a>
                <a>
                Help Center for Recruiters
                </a>
            </ul>
        </div>
        <div>
            <h1 className='text-blue-900 font-semibold uppercase'>Hiring remotely</h1>
            <ul className='*:cursor-pointer *:text-sm font-thin flex-col flex py-1'>
                <a>
                Why Remotive?
                </a>
                <a>
                Post a Remote Job
                </a>
                <a>
                Remote Hiring Tips
                </a>
                <a>
                Help Center for Recruiters
                </a>
            </ul>
        </div>
        <div>
            <h1 className='text-blue-900 font-semibold uppercase'>Hiring remotely</h1>
            <ul className='*:cursor-pointer *:text-sm font-thin flex-col flex py-1'>
                <a>
                Why Remotive?
                </a>
                <a>
                Post a Remote Job
                </a>
                <a>
                Remote Hiring Tips
                </a>
                <a>
                Help Center for Recruiters
                </a>
            </ul>
        </div>
        <div>
            <h1 className='text-blue-900 font-semibold uppercase'>Hiring remotely</h1>
            <ul className='*:cursor-pointer *:text-sm font-thin flex-col flex py-1'>
                <a>
                Why Remotive?
                </a>
                <a>
                Post a Remote Job
                </a>
                <a>
                Remote Hiring Tips
                </a>
                <a>
                Help Center for Recruiters
                </a>
            </ul>
        </div>
      </div>
      <div  className='md:flex mx-6 pb-10 md:items-baseline  md:justify-between'>

      <div className='pb-3 flex items-center justify-center text-xs font-thin'>

      <p className='m-1'>&copy; 2014-2024, made Remotely with</p>
       <FaHeart className='text-red-600' />
      </div>
      <div className= 'flex flex-shrink justify-center p-3 *:m-3'>
      <IconContext.Provider value={{size:"1.5rem"}}>
      <a className='hover:text-sky-800  text-slate-900 cursor-pointer'>
      <FaLinkedin  className='hover:size-7' />
      </a>
      <a  className='hover:text-sky-800  text-slate-900 cursor-pointer'>
      <FaTwitter  className='hover:size-7' />

      </a>
      <a  className='hover:text-sky-800  text-slate-900 cursor-pointer'>
      <FaInstagramSquare  className='hover:size-7' />

      </a>
      <a  className='hover:text-sky-800   text-slate-900 cursor-pointer'>
      <FaFacebook  className='hover:size-7' />

      </a>
      <a  className='hover:text-sky-800  text-slate-900  cursor-pointer'>
      <FaTelegramPlane className='hover:size-7' />

</a>
      <a  className='hover:text-sky-800   text-slate-900 cursor-pointer'>
      <IoMdMail  className='hover:size-7'/>

      </a>
      </IconContext.Provider>
      </div>
      </div>
    </div>
    <div  onClick={handleScrollToTop} >
<FaArrowUpLong className='opacity-65 text-slate-900 hover:border border-y-blue-300 shadow-md shadow-slate-500 border-x-indigo-300 hover:opacity-100 m-3 size-10 fixed right-4 bottom-2 z-10 p-2 rounded-full hover:delay-150' />
    </div>
    </>
  )
}

export default Footer
