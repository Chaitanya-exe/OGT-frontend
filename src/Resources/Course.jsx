import React, { useRef, useState } from 'react'
import Header from '../page_components/header'
import Footer from '../landing_components/footer'
import {motion} from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Course = () => {
  return (
    <>
    
    <div className='bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0'>
      <Header />

    </div>
    
      <Videos/>
      <div className='bg-blue-950'>
      <Footer route="aboutus" />

      </div>
    
      
    </>
  )
}


export default Course

const Videos =()=>{
  const settings = {
    dots : true,
    infinite : true,
    speed :  500,
    slidesToShow : 3,
    slidesToScroll : 3,
    arrows:true,
    // customPaging: function (i) {
    //   return (
    //     <div className="text-white hover:text-opacity-75 p-2 rounded-full mx-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
    //       {i + 1}
    //     </div>
    //   );
    // }, 
  }

    return(
      <>
        
      <div className=' w-full mt-16 bg-purple-200/40 py-8 px-20 overflow-hidden space-y-16'>
        <Slider {...settings} className='space-x-6' >
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        

        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>

        </Slider>

        <Slider {...settings} className='space-x-6' >
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        

        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>
        <div className=" shadow w-full h-full bg-white rounded-lg overflow-hidden p-0.5 ">
        <h2>React native</h2>

            <motion.iframe initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7}}
             className='object-cover w-full object-center rounded-md' width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></motion.iframe>

        </div>

        </Slider>
      </div>


        
       
      </>
    )
}