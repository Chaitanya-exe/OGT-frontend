import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page_components/HomePage";
import LandingPage from "./landing_components/LandingPage";
import LogIn from "./logIn/LogIn";
import Reset from "./logIn/Reset";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </>
  );
};

export default App;
