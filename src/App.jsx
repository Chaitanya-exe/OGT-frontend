import React, { useContext,lazy,Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import HomePage from "./page_components/HomePage";
import Loading from "./page_components/Loading";

import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import('./page_components/HomePage'))
const LandingPage = lazy(() => import("./landing_components/LandingPage"))
const LogIn = lazy(() => import("./logIn/Content")) 
const Reset = lazy(() => import("./logIn/Reset") )
const Form_page = lazy(() => import("./PostJob/Form_page"))
const  Project = lazy(()=> import("./Project/Project")) 
const Index = lazy(()=> import("./Donation")) 
const NewAcc = lazy(()=> import("./logIn/SignUp/NewAcc"))
const AboutUs = lazy(()=> import("./About us/AboutUs"))
const FAQs  = lazy(()=>import("./Faqs/FAQs")) 
const Course =lazy(()=>import("./Resources/Course")) 
const ConatctUs =lazy(()=>import("./Contact-details/ConatctUs"))
const ScrollToTop = lazy(()=>import("./ScrollToTop"))
// import { GlobalContext } from "./Context";
import Content from "./logIn/Content";
import SignUp from "./logIn/SignUp/SignUp";

const App = () => {
  return (
    <>
      <AnimatePresence>

      <ScrollToTop />
<Suspense fallback={<Loading />}>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />}/>        
            <Route path="/logIn" element={<LogIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/form" element={<Form_page />} />
          <Route path="/project" element={<Project />}></Route>
          <Route path="/donate" element={<Index />}></Route>
          <Route path="/newAccount" element={<NewAcc />}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/FAQ's" element={<FAQs/>}></Route>
          <Route path="/Free-courses" element={<Course />}></Route>
          <Route path="/contactDetails" element={<ConatctUs />}></Route>
        </Routes>
</Suspense>
{/* 
        {isLoginFormOpen && (
          <div className="flex fixed top-0 left-0 w-full h-full items-center justify-center bg-black/80 z-10">
            <Content onCancel={handleCancel} />
          </div>
        )} */}
      </AnimatePresence>
    </>
  );
};

export default App;
