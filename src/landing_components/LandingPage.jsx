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

       <div className=' bg-gradient-to-br from-indigo-100 via-orange-200 via-orange-20 to-pink-200 '>
   
  
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
