import React from 'react'

import AboutJob from './AboutJob'
import AboutCompany from './AboutCompany'
import Contact from './Contact'
import Help from './Help'
import Footer from '../page_components/Footer'
// import Form_right from './Form_right'

const Form_page = () => {
  return (
    <>
      // <div className='flex space-x-1'>
      <div className='divide-y-2 mb-40  ml-8 pr-16'>
      <AboutJob/>
      <AboutCompany/>
      <Contact/>
      {/* <Billing/> */}
      {/* <PromotionPlan/> */}
      <Help/>
   </div>
  
      // </div>
      <div className='mb-24'>
    <Footer/>
      </div>

    </>
  )
}

export default Form_page
