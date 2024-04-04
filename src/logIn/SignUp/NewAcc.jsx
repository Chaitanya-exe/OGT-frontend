import React, { useState } from "react";
import SignUp from "./SignUp";
import Category from "./Category";
import Header from "../../page_components/header";
import Step2 from "./Step2";

const NewAcc = () => {
  const [step2SignUp,setStep2SignUp] = useState(false)
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-neutral-400">
        <Header />
      </div>
      <div className="p- h-screen flex space-x-10">
        <div className="w-1/3 overflow-hidden flex justify-center items-center">
          <img src="https://source.unsplash.com/random/flower" 
            className="h-screen object-cover object-center w-full"
          />
        </div>
        <div className="w-1/2 ">
          {/* <Category /> */}
          <div className="flex justify-center h-full">
{ 
  step2SignUp ? <Step2 /> : <SignUp setStep2SignUp={setStep2SignUp} />
}



          </div>
        </div>
      </div>
    </>
  );
};

export default NewAcc;
