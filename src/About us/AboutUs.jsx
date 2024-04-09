import React from 'react'
import Header from '../page_components/header'
import Footer from '../landing_components/footer'

const AboutUs = () => {
  return (
    <div className=''>
    <div className='bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0'>
      <Header />

    </div>
      <Content />
      <div className='bg-blue-950 absolute bottom-0 left-0 right-0'>
      <Footer route="aboutus" />

      </div>
    </div>
  )
}

export default AboutUs


const Content=() => {
    return(
        <>
        <div className='max-w-3xl mx-auto border mt-28 p-10'>
            <h2 className='text-3xl text-center'>About us</h2>
        </div>
            
        </>
    )
}