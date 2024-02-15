import React from 'react'
import Header from './header'
import Middiv from './Mid-div'
import Step from './steps'
import Facilities from './facilities'
import Tabs from './tabs'
import Footer from './footer'
// import { Route, Routes } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    {/* bg-gradient-to-r from-red-500 to-blue-500 */}

       <div className='bg-gradient-to-r  from-indigo-200 to-pink-100 via-blue-100 '>
   
  
        <Header/>
        <Middiv/>
        <Step/>
        <Facilities/>
        <Tabs/>
        <Footer />
   
       </div>
    </>
  )
}

export default LandingPage
