import React from 'react'
import SignUp from './SignUp'
import Category from './Category'
import Header from '../../page_components/header'

const NewAcc = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-purple-300 to-neutral-400'>
<Header />

    </div>
    <div className='p- h-screen flex space-x-10'>
    <div className='w-1/3 h-fit overflow-hidden flex justify-center items-center'>
        <img src="https://source.unsplash.com/random/flower" />
    </div>
    <div className='w-1/2'>
    <Category />
    <div className='flex justify-center'>
    <SignUp/>
    </div>
      

    </div>
    </div>
    </>
  )
}

export default NewAcc
