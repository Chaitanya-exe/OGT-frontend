import React from "react";
import Header from "../landing_components/header";
import Nav from "../landing_components/Nav";
import { Link } from "react-router-dom";
import Links from "./ComapnyDescription/Left/Links";
import Heading from "./ComapnyDescription/Left/Heading";
import Display from "./ComapnyDescription/Display";
import Footer from "../page_components/Footer";

const Project = () => {
  return (
    <div>
      <Nav />
      <div className="mt-20 ml-7 space-y-4">
        <Display />
      </div>
      <Footer />
    </div>
  );
};

export default Project;
