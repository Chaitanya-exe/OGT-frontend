import React from 'react'
import Header from './header'
import Middiv from './Mid-div'
import Step from './steps'
import Facilities from './facilities'
import Tabs from './tabs'
import Footer from './footer'
import {motion} from "framer-motion"
// import { Route, Routes } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
       <motion.div
  //       initial={{opacity:0}}
  //  animate={{opacity:1}}
  //  exit={{opacity:0}}

 
  initial={{width:0,
  opacity:0}}
   animate={{width:"100%",opacity:1}}
   exit={{x:window.innerWidth,opacity:0, transition:{duration:0.1}}}
       
       
       className='bg-gradient-to-l from-pink-300 via-orange-200 to-blue-200  '>
   
  
        <Header/>
        <Middiv/>
        <Step/>
        <Facilities/>
        <Tabs/>
        <Footer />
   
       </motion.div>
    </>
  )
}

export default LandingPage
