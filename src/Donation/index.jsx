import React, { useContext } from "react";
import Header from "../page_components/header";
import { GlobalContext } from "../Context";
import Finish from "./ForPage/Finish";
import Thanks from "./ForPage/Thanks";
import PageStep1 from "./ForPage/PageStep1";
import PageStep2 from "./ForPage/PageStep2";
import {motion,AnimatePresence} from "framer-motion"

const Index = () => {
  const { StepCount, setStepCount } = useContext(GlobalContext);

  return (
    <>
    <div className="bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0">
      <Header />
    </div>
      <div className="text-center mt-20 space-y-10 p-3 ">
      <h1 className="text-4xl font-semibold text-sky-900">Step : {StepCount===1 ? "1" : StepCount===2 ? "2" : StepCount===3 ? "last" : ""}</h1>

      <div className="flex justify-center items-center">
      <AnimatePresence>

      {StepCount===1 ? <PageStep1/> : StepCount===2 ? <PageStep2/> : StepCount===3 ? <Thanks /> : <Finish/>}
      </AnimatePresence>
      </div>
      </div>

    </>
  );
};

export default Index;
