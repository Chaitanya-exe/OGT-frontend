import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import RightSide from './rightSide'
import SignUp from '../logIn/SignUp'
import {motion} from "framer-motion"
import Header from './header'

const backdrop={
  visible:{opacity: 1},
  hidden:{opacity: 0}

}

const HomePage = () => {
  const [signUp,setSignUp] =useState(false)
  const [hasDialogBeenShown, setHasDialogBeenShown] = useState(false);


  useEffect(()=>{
    const handleSignUpScroll=()=>{
      if(window.scrollY>300 && !hasDialogBeenShown){
        setSignUp(true)
        setHasDialogBeenShown(true)
      } }
    window.addEventListener('scroll',handleSignUpScroll)
    return()=>{
      window.removeEventListener('scroll',handleSignUpScroll)
    }
  },[hasDialogBeenShown])     

  const handleCancel = () => {
    setSignUp(false);
  };
  return (
   <>
   <div className='bg-gradient-to-br  from-pink-400 via-orange-200 to-blue-300 '>

    <Header/>
   </div>
   {signUp && (
    <motion.div
    variants={backdrop}
    initial="hidden"
    animate="visible"
     className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-indigo-200 bg-opacity-70 z-10">
<SignUp onCancel={handleCancel}/>
    </motion.div>
   )}
    <RightSide/>
    <Footer/>


   </>
  )
}

export default HomePage
