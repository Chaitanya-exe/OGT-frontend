import React from 'react'
import Header from '../page_components/header'
import Footer from '../landing_components/footer'

const ConatctUs = () => {
  return (
      <>
    <div>
    <div className='bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0'>
      <Header />

    </div>
      
      <div className='bg-blue-950 '>
      <Footer route="aboutus" />

      </div>

    </div>

    </>
  )
}

export default ConatctUs
