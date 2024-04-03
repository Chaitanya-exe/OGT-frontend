import React from "react";
// import Header from "../landing_components/header";
// import Nav from "../landing_components/Nav";
// import { Link } from "react-router-dom";
// import Links from "./ComapnyDescription/Left/Links";
// import Heading from "./ComapnyDescription/Left/Heading";
import Display from "./ComapnyDescription/Display";
import Footer from "../page_components/Footer";
import Header from "../page_components/header";

const Project = () => {
  return (
    <div>
    <div className="fixed z-10 bg-gradient-to-r  from-indigo-200 to-pink-100 via-blue-100 right-0 left-0 top-0">

      <Header />
    </div>
      <div className="mt-20 ml-7 space-y-4">
        <Display />
      </div>
      <Footer />
    </div>
  );
};

export default Project;
