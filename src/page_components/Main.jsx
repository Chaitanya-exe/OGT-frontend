import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Main = () => {
  const { JobLi } = useContext(GlobalContext);
  const [displayText, setDisplayText] = useState("");
  const text = ": The Global marketplace for  Top Talent.";
  const speed = 100;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    setTimeout(() => {
      let interval = setInterval(() => {
        if (currentIndex == text.length) {
          clearInterval(interval);
          return;
        }
        currentText = text.slice(0, currentIndex + 1);
        setDisplayText(currentText);
        currentIndex++;
      }, speed);
      return () => clearInterval(interval);
    }, 1500);
  }, [text, speed]);
  return (
    <div className="flex mt-16 mb-10 py-10 text-wrap flex-col ">
      <div className="text-center my-14 md:mx-16 mx-2">
        <h1 className="font-bold font-riot text-4xl bg-clip-text bg-gradient-to-tr from-slate-700 via-sky-950 to-blue-950 text-transparent">
          <span className="text-6xl  text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-pink-900 to-orange-500">
            OGT{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-950 to-pink-600">
            {/* place for  Top Talent. */} {displayText}
          </span>
        </h1>
        <p className="text-center mt-2 mx-28">
          Connect with inspiring projects from around the world and collaborate
          with businesses that value your unique skills. Embrace the freedom to
          choose the work you love, and build a flourishing career without
          borders. For the businesses and startups it's great market place for
          the services which will make your business easier for you.
        </p>

        <Link
          to={"/form"}
          className="text-lg relative group font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-pink-600 capitalize"
        >
          {" "}
          post a job
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 rounded-full transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>
      <div className="mt-4 mb-11 sm:mx-4 md:ml-40 md:mr-10 lg:mr-72 lg:ml-96">
        <ul className="*:rounded-full *:border *:bg-sky-100 *:border-slate-600  *:capitalize *:text-slate-900 *:m-1 *:px-2 *:py-0.5 *:inline-block">
          {JobLi.map((job) => (
            <li className="bg-blue-200">{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
