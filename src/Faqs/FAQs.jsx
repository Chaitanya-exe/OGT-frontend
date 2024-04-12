import React, { useState } from "react";
import Header from "../page_components/header";
import Footer from "../landing_components/footer";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  return (
    <div>
      <div className="">
        <div className="bg-gradient-to-t from-purple-100 to-blue-200 transition-all ease-linear fixed z-50 right-0 left-0 top-0">
          <Header />
        </div>
        <QA />
        <div className="bg-blue-950">
          <Footer route="Faqs" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const QA = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="flex justify-center mt-20 font-faqs p-16">
        <div className="w-1/2 ">
          {data.map((item, i) => (
            <div className={` ${selected == i ? "bg-gradient-to-t from-purple-100" : ""} "item rounded-md shadow  cursor-pointer font-semibold capitalize p-3 m-1"`}>
              <div
                className="title flex justify-between"
                onClick={() => {
                  if (selected == i) {
                    return setSelected(null);
                  }
                  setSelected(i);
                }}
              >
                <h2 className="text-blue-800 ">{item.question}</h2>
                <span className={`${selected == i ? "rotate-180" : ""} size-6 duration-500` }>^</span>
                {/* {selected == i ? : } */}
              </div>
              <AnimatePresence>
              <motion.div 
              initial={{
                 height:0
              }}
              animate={{ height:"auto"}}
              exit={{height:0}}
              transition={{duration : 2}}
                className={`${selected == i? "block " : "hidden"} my-3 duration-500 overflow-hidden delay-200 transition-all ease-in-out"`}
              >
                {item.answer}
              </motion.div>

              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const data = [
  {
    question: "question 1",
    answer:
      "Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website if you havenalready",
  },
  {
    question: "question 2",
    answer:
      "Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website if you havenalready",
  },
  {
    question: "question 3",
    answer:
      "Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website if you havenalready",
  },
  {
    question: "question 4",
    answer:
      "Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website if you havenalready",
  },
  {
    question: "question 5",
    answer:
      "Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official Node.js website if you havenalready",
  },
];
