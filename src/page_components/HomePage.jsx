import React from 'react'
import Footer from './Footer'
import Header from '../landing_components/header'
import RightSide from './rightSide'

const HomePage = () => {
  return (
   <>
   <div className='bg-gradient-to-r  from-indigo-200 to-pink-100 via-blue-100 '>

    <Header />
   </div>
    <RightSide/>
    <Footer/>


   </>
  )
}

export default HomePage
