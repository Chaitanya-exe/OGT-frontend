import React from "react";
// import { Link } from "react-router-dom";

export default function Advertisements() {
  return (
    <>
      <div className=" border w-full mt-2 border-r-2 rounded-lg bg-slate-50 relative">
        <a className="capitalize flex items-center cursor-pointer">
          <img
            src=" https://source.unsplash.com/random/person"
            className="w-40 h-28 rounded-l-lg"
          />
          <p className="text-wrap text-slate-700 tracking-wide p-4">
            Get 10 free images from adobe stock.start now
          </p>

          <button className="p-0.5 md:p-2 rounded-tl-lg bottom-0 right-0 absolute text-xs bg-gradient-to-br from-blue-300 via-purple-200 to-green-100 ">
            Ad via carbon
          </button>
        </a>
      </div>
     
    </>
  );
}
