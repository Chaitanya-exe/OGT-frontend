import React from "react";
import AboutComp from "./Left/AboutComp";
import Expect from "./Left/Expect";
import Links from "./Left/Links";
import Heading from "./Left/Heading";

const Display = () => {
  return (
    <div className="flex">
      <div className="w-2/3 mt-9 mx-8 overflow-y-auto font-thin tracking-wide text-wrap space-y-5">
        <Links />
        <Heading />
        <AboutComp />
        <Expect />
      </div>
      <div className="sticky top-20 h-screen overflow-y-auto bottom-0 right-0 bg-green-300 w-1/3 ">
        nvjkbe
      </div>
    </div>
  );
};

export default Display;
