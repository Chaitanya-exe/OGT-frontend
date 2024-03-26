import React,{useContext, useState} from "react";

import {motion} from "framer-motion"
import { FaRegHeart } from "react-icons/fa";
import Progess from "../fold/Progess";
import { GlobalContext } from "../../Context";
  
const gridValues = [10, 20, 30,50,100,200];

const PageStep1 = () => {

    const {  StepCount,setStepCount, activeTab, setActiveTab,choosenAmount,setChoosenAmount,isCafEmpty,setISCafEmpty} = useContext(GlobalContext)
  
 console.log(choosenAmount)

  return (
    <motion.div
    initial={{opacity:0 ,x:"100%"}}
    animate={{opacity:1,x:0}}
    exit={{opacity:0,x:"-100%"}}
    transition={{duration:0.3}}
     className="w-4/12 h-full bg-white z-10 text-center space-y-5 border rounded-lg overflow-hidden">
     <Progess />
      <div className="space-y-3 px-4 text-center text-sky-950">
        <p>Every Donation Counts - Make Yours Today!</p>
        <div className="space-x- block mx-auto rounded-full border w-fit p- border-purple-500">
          <button key="1"
           onClick={() => setActiveTab(1)}
           className={`${activeTab === 1 ? "" : "hover:text-black/60"} 
            relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
            
           >
             {activeTab === 1 && (
              <motion.div
                layoutId="active-pill"
                transition={{type: "spring" , duration: 0.6}}
                className="absolute  inset-0 bg-purple-500"
                style={{
                //   borderRadius: 9999,
                borderTopLeftRadius: "9999px",
    borderBottomLeftRadius: "9999px",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
                }}
              ></motion.div>
            )}
            <span className="relative z-10">one time </span>

           </button>
           <button key="2"
           onClick={() => setActiveTab(2)}
           className={`${activeTab === 2 ? "" : "hover:text-black/60"} 
            relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
            
           >
             {activeTab === 2 && (
              <motion.div
                layoutId="active-pill"
                transition={{type: "spring" , duration: 0.6}}
                className="absolute  inset-0 bg-purple-500"
                style={{
                //   borderRadius: 9999,
                borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: "9999px",
    borderBottomRightRadius: "9999px",
                }}
              ></motion.div>
            )}
            <span className="relative z-10">

<FaRegHeart className={` ${activeTab === 2 ? "inline-flex" : "hidden"
} mr-2 text-white`} />
            Monthly</span>

           </button>
        </div>
        <div className="grid grid-cols-3 gap-2 *:py-2  *:rounded-full text-center">
           { gridValues.map((value,index) => (
            <div onClick={()=> {setChoosenAmount(value) ,setISCafEmpty(true)}} key={index} className={`${choosenAmount === value ? "bg-purple-500 text-white" : "bg-gray-200 "}`}>${value}</div>
           )) }
           <input
           onClick={()=> setISCafEmpty(false)}
           onChange={(e)=>setChoosenAmount(e.target.value)}
           value= { isCafEmpty ? "$ Custom Amount" : choosenAmount}

           type="text"
           name="custom anount"
           placeholder="$  custom amount"
        //    value={}
            className="col-span-3 px-4 text-cente border outline-none" />
            
        </div>
      </div>
      <div className="px-4 pb-5 space-y-3">

      <button onClick={() => setStepCount(StepCount +1)} disabled={!choosenAmount} className="bg-orange-500 disabled:bg-orange-300  text-slate-100 p-2 w-full rounded-full">Next</button>
      <button disabled={StepCount===1} onClick={() => setStepCount(StepCount - 1)} className="bg-orange-500 disabled:bg-orange-300  text-slate-100 p-2 w-full rounded-full">Prev</button>

      </div>
    </motion.div>
  );
};

export default PageStep1;
