import React, { useState } from 'react'
import {Link} from "react-router-dom"
const List=[
    {num: "3,000,000+",
     text: " unique yearly visits on remotive.com"},

     {num:"3,500,000+ ",
        text: " monthly impressions on Google Jobs"},
        {num:"264,000+ ",
            text: " subscribers on our daily email job digest"},
            {num:"320,000+ ",
                text: "followers on LinkedIn"},
                {num:"26,000+",
                    text: "followers on Twitter"},
                    {num: "3,500+",
                        text: "members in our private Slack Community"},
    ]



const Head = ({stepNum,setStepNum}) => {
  return (
    <>
    <nav className="bg-gradient-to-r rounded-xl  from-indigo-200 to-pink-100 via-blue-100 " >
    <div className='h-16 z-10 fixed top-0 right-0 left-0 shadow shadow-gray-300 bg-gradient-to-r  from-indigo-200 to-pink-100 via-blue-100 '>
    <div className='flex mx-5 p-4'>
    <div>
            <Link className="text-3xl font-lexend font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-600 ">O G T</Link>
           </div> 
        <div className='mx-auto '>
            <ol type='1' className='flex space-x-6 *:capitalize'>
                <li className={`${stepNum === 1 ? "font-semibold ogt " : ""} text-slate-600`}>1.Complete your Project Form</li>
                <li className={`${stepNum === 2 ? "font-semibold ogt" : ""} text-slate-600`}>2. preview</li>
                <li className={`${stepNum === 3 ? "font-semibold ogt" : ""} text-slate-600`}>3. confirm & pay</li>
            </ol>
        </div>

    </div>

    </div>
    <div className='mx-4 p-7 mt-28 rounded-2xl'>
    <h1 className='text-4xl text-slate-900 font-riot py-4 '>
    Every remote job posted here will be 
    <span className='text-blue-600'> shared on Remotive's network</span>
    </h1>
    <div>
        <ul className=''>
{List.map((item)=>(
            <li className='font-extralight'>
            <span className='w-1.5 h-1.5 mx-3 inline-flex align-middle rounded-full bg-slate-900'></span>
            <span className='font-semibold'>{item.num} </span>{item.text}</li>))}

        </ul>
    </div>

    </div>
    </nav>
      
    </>
  )
}

export default Head
