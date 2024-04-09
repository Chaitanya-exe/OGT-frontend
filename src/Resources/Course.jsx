import React from 'react'
import Header from '../page_components/header'
import Footer from '../landing_components/footer'

const Course = () => {
  return (
    <>
    
    <div className='mt-20'>
    <div className='bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0'>
      <Header />

    </div>
    
      <Videos/>
      <div className='bg-blue-950 absolute bottom-0 left-0 right-0'>
      <Footer route="aboutus" />

      </div>
    </div>  
    
      
    </>
  )
}

export default Course

const Videos =()=>{
    return(
        <div className='grid grid-cols-4 mx-8'>
        <div>
        <h2>React native</h2>
            <iframe width="360" height="215" src="https://www.youtube.com/embed/0-S5a0eXPoc?si=nIETJGAFE0tJAH-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
        </div>
    )
}