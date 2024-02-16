import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page_components/HomePage";
import LandingPage from "./landing_components/LandingPage";
import LogIn from "./logIn/LogIn";
import Reset from "./logIn/Reset";
// import Head from "./PostJob/Head";
// import AboutJob from "./PostJob/AboutJob";
// import AboutCompany from "./PostJob/AboutCompany";
// import Contact from "./PostJob/Contact";
// import Billing from "./PostJob/Billing";
// import PromotionPlan from "./PostJob/PromotionPlan";
import Form_page from "./PostJob/Form_page";
const App = () => {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/form" element={<Form_page/>}/>
      </Routes> 
     
    </>
  );
};

export default App;
