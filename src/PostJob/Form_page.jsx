import React from 'react'

import AboutJob from './AboutJob'
import AboutCompany from './AboutCompany'
import Contact from './Contact'
import Billing from './Billing'
import PromotionPlan from './PromotionPlan'
import Help from './Help'

const Form_page = () => {
  return (
    <div className='divide-y-2 mx-8'>
    <AboutJob/>
    <AboutCompany/>
    <Contact/>
    <Billing/>
    <PromotionPlan/>
    <Help/>

      
    </div>
  )
}

export default Form_page
