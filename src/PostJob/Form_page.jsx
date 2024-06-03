import React, { useContext, useState } from "react";

import AboutJob from "./AboutJob";
import Head from "./Head";
import Help from "./Help";

import axios from "axios";
import { GlobalContext } from "../Context";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../landing_components/footer";

const Form_page = () => {
  const [stepNum, setStepNum] = useState(1);

  const { project } = useContext(GlobalContext);
  return (
    <>
      <div className="space-y-1 relative">
        <div className="divide-y-2 mb-4 mx-8 ">
          <Head stepNum={stepNum} setStepNum={setStepNum} />
          <AboutJob />
        </div>
        <button
          onClick={async () => {
            const data = project;
            const response = await axios.post(
              "http://192.168.43.149:5000/api/projects",
              data
            );
            setStepNum((prev) => prev + 1);
          }}
          className="button mx-auto block"
        >
          Post Your Project{" "}
        </button>

        <Help />
      </div>
      <div className="mb-24 bg-gradient-to-br  from-indigo-200 to-pink-100 via-blue-100 font-semibold">
        <Footer route="home" />
      </div>
      {stepNum === 2 ? (
        <Preview project={project} setStepNum={setStepNum} />
      ) : null}
    </>
  );
};

export default Form_page;





const Preview = ({ project, setStepNum }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          damping: 20,
          stiffness: 80,
        },
      }}
      className="fixed top-20 rounded-lg right-0 w-1/2 overflow-y-scroll h-full z-10 mb-32 bg-purple-200"
    >
      <div className=" mx-8 my-12 p-8 *:p-4">
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Project Title:</p>
          <p className=" col-span-4">{project.title}</p>
        </div>
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Project Category:</p>
          <p className="col-span-4">{project.category}</p>
        </div>
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Username :</p>

          <p className=" col-span-4">{project.postedBy}</p>
        </div>
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Price :</p>
          <p className=" col-span-4">{project.price}</p>
        </div>
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Delivery Time :</p>
          <p className=" col-span-4">{project.DeliveryTime}</p>
        </div>
        <div className="grid grid-cols-5">
          <p className="font-semibold col-span-1">Description :</p>
          <p className=" col-span-4">{project.desc}</p>
        </div>

        <button onClick={() => setStepNum(3)} className="button mx-auto block">
          Next
        </button>
      </div>
    </motion.div>
  );
};
