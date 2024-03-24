import React from "react";

const First = () => {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
        <img
          className="w-20 h-20 object-cover object-center"
          src="https://source.unsplash.com/random/flower"
        />
      </div>
      <h1 className="font-bold text-lg text-wrap">Senior Independent Software Developer </h1>
      <a className="cursor-pointer underline">.@A.Team</a>
    </div>
  );
};

export default First;
