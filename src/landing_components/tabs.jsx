import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="m-6">
        <div className="text-center m-6">
          <h1 className=" font-riot text-3xl text-slate-800 capitalize m-2">
            how it works
          </h1>
          <span className="rounded-full relative w-full h-1 inline-block bg-pink-50">
            <span
              className={
                toggleState == 1
                  ? "rounded-full absolute w-1/3 h-1 inline-block transition-all bg-indigo-300 left-0"
                  : toggleState === 2
                  ? "rounded-full absolute w-1/3 h-1 inline-block transition-all  bg-indigo-300 left-1/3"
                  : "rounded-full absolute w-1/3 h-1 inline-block transition-all bg-indigo-300 right-0 "
              }
            ></span>
          </span>
        </div>
        <div className="md:flex  space-">
          <div className=" md:w-1/3" onClick={() => toggleTab(1)}>
            <div className="m-3 py-3">
              <h1
                className={
                  toggleState === 1
                    ? "text-xl font-riot capitalize text-purple-900 "
                    : "text-xl font-riot capitalize  text-opacity-45"
                }
              >
                1. post your job
              </h1>
              <p
                className={
                  toggleState === 1 ? "" : "text-opacity-45 text-slate-900"
                }
              >
                Tell us about your requirements in your Project.
              </p>
            </div>
            <div
              className={toggleState === 1 ? "m-3 block flex-grow-0" : "hidden"}
            >
              <ul className="space-y-2 list-inside list-disc">
                <li className="">
              <span className="text-slate-800">

               Craft a Compelling Project Description :
              </span>
               
                   <p className="text-sm">
                  Start by providing a
                  clear and concise title for your project. Next, fill out the
                  project description, outlining the specific requirements,
                  desired skills, and timeline for completion.

                  </p>
                </li>
                <li>
                <span className="text-slate-800" >
               Set Clear Expectations:

                </span>
                   <p className="text-sm">
                
Be as specific as possible about your project needs.  Include details such as the estimated project duration, budget range, and your preferred communication style.
                  </p>
                </li>

              </ul>
            </div>
          </div>

          <div className=" md:w-1/3" onClick={() => toggleTab(2)}>
            <div className="m-3 py-3">
              <h1
                className={
                  toggleState === 2
                    ? "text-xl font-riot capitalize text-purple-900 "
                    : "text-xl font-riot capitalize  text-opacity-55"
                }
              >
                2. Choose Your Developer
              </h1>
              <p
                className={
                  toggleState === 2 ? "" : "text-opacity-45 text-slate-900"
                }
              >
                You will be notified on project completion
              </p>
            </div>
            <div
              className={toggleState === 2 ? "m-3 block flex-grow-0" : "hidden"}
            >
              <p className="text-s">
              Effortless Talent Selection:

Once you've posted your project, qualified Developers will submit proposals outlining their skills and experience. Our platform provides clear profiles to help you make informed decisions. Simply browse through the proposals and select the freelancer who best aligns with your project requirements and budget.
              </p>
            </div>
          </div>
          <div className=" md:w-1/3" onClick={() => toggleTab(3)}>
            <div className="m-3 py-3">
              <h1
                className={
                  toggleState === 3
                    ? "text-xl font-riot capitalize text-purple-900 "
                    : "text-xl font-riot capitalize  text-opacity-55"
                }
              >
                3. Delivery upon conformation
              </h1>
              <p
                className={
                  toggleState === 3 ? "" : "text-opacity-45 text-slate-900"
                }
              >
                Project will be delivered after payment conformation
              </p>
            </div>
            <div
              className={toggleState === 3 ? "m-3 block flex-grow-0" : "hidden"}
            >
              <p className="text-s">
                Create a Custom Configuration File: First, create a
                tailwind.config.js file in your project's root directory if you
                haven't already done so. Extend the Transform Configuration: In
                your tailwind.config.js file, you can extend the transform
                property with your custom values. Here's an example:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex content-center mt-24">
        <Link to={"/donate"} className="button mx-auto ">
          Donate Us
        </Link>
      </div>
    </>
  );
}
