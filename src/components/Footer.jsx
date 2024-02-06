import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <div className='bg-orange-100 mt-8'>
      <div className='flex justify-between p-1 mx-4 py-8 '>
        <div>
            <h1 className='text-orange-950 font-semibold uppercase'>Hiring remotely</h1>
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
            <h1 className='text-orange-950 font-semibold uppercase'>Hiring remotely</h1>
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
            <h1 className='text-orange-950 font-semibold uppercase'>Hiring remotely</h1>
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
            <h1 className='text-orange-950 font-semibold uppercase'>Hiring remotely</h1>
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
      <div className='pb-3 flex items-center justify-center text-xs font-thin'>

      <p className='m-1'>&copy; 2014-2024, made Remotely with</p>
       <FaHeart className='text-red-600' />
      </div>
      <div className= ' bg-orange-300 flex justify-center p-3 *:m-3 text-orange-950'>
      <IconContext.Provider value={{size:"1.5rem"}}>
      <a className='hover:text-white cursor-pointer'>
      <FaLinkedin />
      </a>
      <a  className='hover:text-white cursor-pointer'>
      <FaTwitter />

      </a>
      <a  className='hover:text-white cursor-pointer'>
      <FaInstagramSquare />

      </a>
      <a  className='hover:text-white cursor-pointer'>
      <FaFacebook />

      </a>
      <a  className='hover:text-white cursor-pointer'>
      <FaTelegramPlane />

      </a>
      <a  className='hover:text-white cursor-pointer'>
      <IoMdMail />

      </a>
      </IconContext.Provider>







      </div>
    </div>
  )
}

export default Footer
