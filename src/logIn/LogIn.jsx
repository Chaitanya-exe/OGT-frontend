import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { GlobalContext } from "../Context";
import axios from "axios";
import { data } from "autoprefixer";
const LogIn = ({ onCancel }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState();
  const { user, token, setToken, setError, error, setIsUserLoggedIn, setUser } =
    useContext(GlobalContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const reqData = {
        username: userName,
        password: userPassword,
      };
      const response = await axios.post(
        "https://ogt-backend.onrender.com/api/users/login",
        reqData
      );
      const resData = await response.data;
      const loginToken = await resData.token;
      const userInfo = await resData.info;
      setIsUserLoggedIn(true);

      onCancel()

      setToken(loginToken);
      setUser({
        ...userInfo,
        password: "",
      });
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className=" mx-auto w-full bg-slate-100 z-50 shado rounded-2xl overflow-hidden text-center text-sky-900 ">
        <form className="my-10 px-8 ">
          <div className="relative">
            <input
              onChange={(e) => setUserName(e.target.value)}
              id="email"
              name="email"
              type="text"
              className="peer bg-transparent w-full border-b-2 border-slate-800 focus:border-pink-800 placeholder-transparent h-10 text-gray-800 focus:outline-none "
              placeholder="Email your address"
            />
            <label
              for="email"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
    peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 
    peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm"
            >
              Username
            </label>
          </div>
          <div className="relative mt-8">
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="peer bg-transparent  w-full placeholder-transparent h-10 border-b-2 
 border-slate-800 text-slate-800 focus:outline-none focus:border-pink-800"
              placeholder="password"
            />
            <label
              for="password"
              className="absolute -top-3.5 left-0 text-pink-500 text-sm transition-all
     peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 
     peer-focus:-top-3.5 peer-focus:text-orange-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div className="mt-3 space-y-3">
            <button
              className="button w-full hover:bg-slate-100 font-semibold hover:border border-slate-950 hover:text-slate-950"
              onClick={(e) => handleLogin(e)}
            >
              Log In
            </button>
            {/* <div  className="flex space-x-2 items-center justify-center px-5 py-3 my-2 w-full rounded-lg bg-slate-200/70 font-semibold border text-slate-950">
<FcGoogle className="size-5"/>
            <button>
              Log In with Google
            </button>

            </div> */}

            <Link
              onClick={onCancel}
              to="/reset"
              className="text-xs float-start hover:underline cursor-pointer"
            >
              Reset password
            </Link>
            <p className="text-sm float-end">
              New ?
              <Link
                to="/newAccount"
                onClick={onCancel}
                className=" hover:underline cursor-pointer font-semibold "
              >
                {" "}
                Create Account
              </Link>
            </p>
          </div>
          {/* <div className="mt-14 -mb-16 text-sm text-center ">
            <p className="tracking-tight font-thin ">
              Are you a hiring manager?
            </p>
            <Link
              to={"/form"}
              className="underline  cursor-pointer hover:text-gray-500 hover:no-underline"
            >
              Post a job here{" "}
            </Link>
          </div> */}
        </form>

        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#64b5f6"
            fill-opacity="1.6"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,181.3C672,192,768,256,864,256C960,256,1056,192,1152,186.7C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LogIn;
