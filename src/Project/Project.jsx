import React from "react";
import Display from "./ComapnyDescription/Display";
import Header from "../page_components/header";
import Footer from "../landing_components/footer";

const Project = () => {
  return (
    <div>
    <div className="fixed z-10 bg-gradient-to-r  from-indigo-200 to-pink-100 via-blue-100 right-0 left-0 top-0">

      <Header />
    </div>
      <div className="mt-20 ml-7 space-y-4">
        <Display />
      </div>
      <div className="bg-blue-950">

      <Footer route="/" />
      </div>
    </div>
  );
};

export default Project;
