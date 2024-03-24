import React from "react";
import AboutComp from "./Left/AboutComp";
import Expect from "./Left/Expect";
import Links from "./Left/Links";
import Heading from "./Left/Heading";
import First from "./Right/First";
import Second from "./Right/Second";

const Display = () => {
  return (
    <div className="flex -mb-8 ">
      <div className="w-11/12 mt-9 mx-8 py-4 overflow-y-auto font-thin tracking-wide text-wrap space-y-5">
        <Links />
        <Heading />
        <AboutComp />
        <Expect />
      </div>
      <div className="sticky top-20 h-screen overflow-y-auto bottom-0 right-0 bg-gradient-to-tl via-pink-200 from-purple-100 to-blue-100 w-4/12">
        <div className="space-y-5 m-8">
          <First />
          <Second />
        </div>
      </div>
    </div>
  );
};

export default Display;
