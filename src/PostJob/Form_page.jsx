import React, { useContext } from 'react'

import AboutJob from './AboutJob'
import AboutCompany from './AboutCompany'
import Contact from './Contact'
import Help from './Help'
import Footer from '../page_components/Footer'
import  axios  from 'axios'
import { GlobalContext } from '../Context'
// import Form_right from './Form_right'

const Form_page = () => {
  const {project} = useContext(GlobalContext)
  return (
    <>
      <div className='fle space-y-1'>
      <div className='divide-y-2 mb-4 mx-8 '>
      <AboutJob/>
      <AboutCompany/>
      <Contact/>
   </div>
      <button
      onClick={async()=>{
        const data = project
        const response = await axios.post(
            "http://192.168.43.149:5000/api/projects",
            data
          );

        
      }}
       className='button mx-auto block' >Post Your Project </button>
      {/* <Billing/> */}
      {/* <PromotionPlan/> */}
      <Help/>
  
       </div>
      <div className='mb-24'>
    <Footer/>
      </div>

    </>
  )
}

export default Form_page
