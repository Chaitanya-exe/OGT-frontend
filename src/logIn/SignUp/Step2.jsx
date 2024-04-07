import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context";
import axios from "axios";

const Step2 = () => {
  const {
    user,
    setUser,
    FirstName,
    setFirstName,
    lastName,
    setLastName,
    desciption,
    setDescription,
    phonenumber,
    setPhoneNumber,
    country,
    setCountry,
    userName,
    setUserName,
    password,
    setPassword,
    isEmployer,
    setIsEmployer,
    email,
    setEmail,
    termsChecked,
    setTermsChecked,
    age,
    setAge,
  } = useContext(GlobalContext);

  return (
    <div className=" mt-12 w-full m-48 flex-col justify-center items-center space-y-8">
      <label className="capitalize font-semibold ">
        {" "}
        Username
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          id="username"
          type="text"
          name="username"
          placeholder="Your username"
          className="border p-2 my-1 w-full font-normal rounded-sm block outline outline-1 outline-purple-400"
        ></input>
      </label>
      <label className="capitalize font-semibold ">
        {" "}
        Email Address
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="EmailAddress"
          type="email"
          name="Email Address"
          placeholder="Your email address"
          className="border p-2 my-1 w-full font-normal rounded-sm block outline outline-1 outline-purple-400"
        ></input>
      </label>
      <label className="capitalize font-semibold">
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="Password"
          type="password"
          name="Password"
          placeholder="Enter Password"
          className="border p-2 my-1 w-full font-normal rounded-sm block outline outline-1 outline-purple-400"
        ></input>
      </label>
      <label className="capitalize font-semibold">
        Confirm Password
        <input
          required
          id="confirm password"
          type="text"
          name="confirm password"
          placeholder="Confirm Password"
          className="border p-2 my-1 w-full font-normal rounded-sm block outline outline-1 outline-purple-400"
        ></input>
      </label>
      <Link
        // to={"/home"}
        onClick={async () => {
          setUser({
            username: userName,
            firstName: FirstName,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
            country: country,
            desc: desciption,
            phNumber: phonenumber,
            isEmployer: isEmployer,
          });
          const data = user;
          const response = await axios.post(
            "http://192.168.43.149:5000/api/users/register",
            data
          );
          const loginData = response.data;
          console.log(loginData);
        }}
        className="button w-fit mx-auto block"
      >
        SignUp
      </Link>
    </div>
  );
};

export default Step2;
