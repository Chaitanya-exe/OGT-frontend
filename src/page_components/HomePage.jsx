import React, { useContext, useEffect, useState } from "react";
import RightSide from "./rightSide";
import { motion } from "framer-motion";
import Header from "./header";
import { GlobalContext } from "../Context";
import Main from "./Main";
import Donate_box from "../Donation/Donate_box";
import DonateSteps from "../Donation/fold/DonateSteps";
import Footer from "../landing_components/footer";
import Advertisements from "./advertise";
import Jobs from "./jobs";
import MessageBox from "../Message/MessageBox";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const HomePage = () => {

  const [showDonationBox, setShowDonationBox] = useState(false);
  const [showChats, setShowChats] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // useEffect(() => {
  //   const handleSignUpScroll = () => {
  //     if (window.scrollY > 300 && !hasDialogBeenShown) {
  //       setSignUp(true);
  //       setHasDialogBeenShown(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleSignUpScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleSignUpScroll);
  //   };
  // }, [hasDialogBeenShown]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDonationBox(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{
          x: window.innerWidth,
          opacity: 0,
          transition: { duration: 0.1 },
        }}
        className="overflow-hidden font-fontBody"
      >
        <div  className=
         {`${isScrolled
              ? "bg-gradient-to-t from-purple-100 to-blue-200 text-slate-800 shadow" : "bg-gradient-to-t from-purple-100 to-orange-50" } transition-all ease-linear  fixed z-50 right-0 left-0 top-0 `}>

        <Header showChats={showChats} setShowChats={setShowChats} isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
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
        <div className="mx-16 *:rounded-lg">
          <Advertisements />
          <Jobs />
          <RightSide />
          <DonateSteps />
        </div>
        <div className="bg-gradient-to-br  from-indigo-200 to-pink-100 via-blue-100">
          <Footer route="home" />
        </div>
        {showDonationBox && (
          <Donate_box setShowDonationBox={setShowDonationBox} />
        )}

        {showChats && (
          <div className="fixed right-2 min-h-96 rounded-l-lg bottom-4 z-50 bg-slate-50 shadow-lg">
            <MessageBox setShowChats={setShowChats} />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default HomePage;
