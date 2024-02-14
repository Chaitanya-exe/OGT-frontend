import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";






export default function Facilities(){
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 md:gap-y-10 md:items-baseline md:gap-x-1 space-y-6 my-20'>
      <div className='text-slate-900 h-full shadow hover:-translate-y-3  transition-all duration-300  bg-slate-100 p-6 rounded-xl mx-10 '>
<FaLink className='text-4xl rounded-lg text-white bg-orange-400 p-1'/>
        <h1 className='my-2'>
            <span className='text-orange-600'>3,000,000+ </span>
            unique yearly visits on remotive.comx
   my-7      </h1>
        <p>We focus on a tech-savvy audience that already has experience working remotely.</p>
      </div>
      
      <div className='text-slate-900 h-full shadow hover:-translate-y-3  transition-all duration-300  bg-slate-100 p-6 rounded-xl mx-10 '>
<FaGoogle className='text-4xl rounded-lg text-white bg-orange-400 p-1'/>
        <h1 className='my-2'>
            <span className='text-orange-600'>3,000,000+ </span>
            unique yearly visits on remotive.comx
   my-7      </h1>
        <p>We focus on a tech-savvy audience that already has experience working remotely.</p>
      </div>
      
      <div className='text-slate-900 h-full shadow hover:-translate-y-3  transition-all duration-300  bg-slate-100 p-6 rounded-xl mx-10 '>
<FaTwitter className='text-4xl rounded-lg text-white bg-orange-400 p-1'/>
        <h1 className='my-2'>
            <span className='text-orange-600'>3,000,000+ </span>
            unique yearly visits on remotive.comx
   my-7      </h1>
        <p>We focus on a tech-savvy audience that already has experience working remotely.</p>
      </div>
      <div className='text-slate-900 h-full shadow hover:-translate-y-3  transition-all duration-300  bg-slate-100 p-6 rounded-xl mx-10 '>
<IoIosMail className='text-4xl rounded-lg text-white bg-orange-400 p-1'/>
        <h1 className='my-2'>
            <span className='text-orange-600'>3,000,000+ </span>
            unique yearly visits on remotive.comx
   my-7      </h1>
        <p>We focus on a tech-savvy audience that already has experience working remotely.</p>
      </div>
      <div className='text-slate-900 h-full shadow hover:-translate-y-3  transition-all duration-300  bg-slate-100 p-6 rounded-xl mx-10 '>
<FaLinkedin className='text-4xl rounded-lg text-white bg-orange-400 p-1'/>
        <h1 className='my-2'>
            <span className='text-orange-600'>3,000,000+ </span>
            unique yearly visits on remotive.comx
   my-7      </h1>
        <p>We focus on a tech-savvy audience that already has experience working remotely.</p>
      </div>

      {/* <span className='w-full h-px bg-slate-400  inline-block'></span> */}

    </div>
  )
}

