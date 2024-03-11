import React from 'react'

import AboutJob from './AboutJob'
import AboutCompany from './AboutCompany'
import Contact from './Contact'
import Billing from './Billing'
import PromotionPlan from './PromotionPlan'
import Help from './Help'
// import Form_right from './Form_right'

const Form_page = () => {
  return (
    // <div className='flex space-x-1'>
    <div className='divide-y-2 w-4/5 ml-8 pr-16'>
    <AboutJob/>
    <AboutCompany/>
    <Contact/>
    <Billing/>
    {/* <PromotionPlan/> */}
    <Help/>
 </div>

    // </div>
  )
}

export default Form_page
