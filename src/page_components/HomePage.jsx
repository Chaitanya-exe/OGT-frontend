import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import RightSide from "./rightSide";
import SignUp from "../logIn/SignUp";
import { motion } from "framer-motion";
import Header from "./header";
import { GlobalContext } from "../Context";
import JobLayout from "./JobLayout";
import Main from "./Main";
import Donate_box from "../Donation/Donate_box";
import DonateSteps from "../Donation/fold/DonateSteps";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const HomePage = () => {
  const {
    signUp,
    isScrolled,
    showDonationBox,
    setShowDonationBox,
    setSignUp,
    hasDialogBeenShown,
    setHasDialogBeenShown,
  } = useContext(GlobalContext);

  useEffect(() => {
    const handleSignUpScroll = () => {
      if (window.scrollY > 300 && !hasDialogBeenShown) {
        setSignUp(true);
        setHasDialogBeenShown(true);
      }
    };
    window.addEventListener("scroll", handleSignUpScroll);
    return () => {
      window.removeEventListener("scroll", handleSignUpScroll);
    };
  }, [hasDialogBeenShown]);

  const handleCancel = () => {
    setSignUp(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDonationBox(true)
    },3000)
    return () => clearTimeout(timer)
  },[])
  return (
    <>
      <motion.div
        //  initial={{opacity:0}}
        //  animate={{opacity:1}}
        //  exit={{opacity:0}}

        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{
          x: window.innerWidth,
          opacity: 0,
          transition: { duration: 0.1 },
        }}
        className="overflow-hidden font-fontBody"
      >
      {/* from-pink-400 shadow via-orange-200 to-orange-50  */}
        <div
          className={
            isScrolled
              ? "bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0"
              : "bg-gradient-to-t from-purple-100 to-orange-50 transition-all ease-linear  fixed z-50 right-0 left-0 top-0"
          }
        >
          <Header />
        </div>
        <div className="bg-gradient-to-b from-purple-200/60 via-blue-100/80 to-orange-100">
          <Main />
        </div>
        {/* {signUp && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-65 z-10"
        >
          <SignUp onCancel={handleCancel} />
        </motion.div>
      )} */}
      {showDonationBox && 
        <Donate_box />
      }
        <div className="mx-16 *:rounded-lg">
          <RightSide />
          <JobLayout />
        <DonateSteps />
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
