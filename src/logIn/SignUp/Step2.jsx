import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context";
import axios from "axios";

const Step2 = () => {
  const { user, setUser } = useContext(GlobalContext);
  console.log(user.username, user.password, user.email);
  return (
    <div className=" mt-12 w-full m-48 flex-col justify-center items-center space-y-8">
      <label className="capitalize font-semibold ">
        {" "}
        Username
        <input
          value={user.username}
          onChange={(e) => {
            const { name } = e.target;
            setUser({ ...user, [name]: e.target.value });
          }}
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
          value={user.email}
          onChange={(e) => {
            const { name } = e.target;
            setUser({ ...user, [name]: e.target.value });
          }}
          id="EmailAddress"
          type="email"
          name="email"
          placeholder="Your email address"
          className="border p-2 my-1 w-full font-normal rounded-sm block outline outline-1 outline-purple-400"
        ></input>
      </label>
      <label className="capitalize font-semibold">
        Password
        <input
          value={user.password}
          onChange={(e) => {
            const { name } = e.target;
            setUser({ ...user, [name]: e.target.value });
          }}
          required
          id="Password"
          type="password"
          name="password"
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
        to={"/home"}
        onClick={async () => {
          const data = user;
          const response = await axios.post(
            "http://localhost:5000/api/users/register",
            data
          );
          const loginData = response.data;
        }}
        className="button w-fit mx-auto block"
      >
        SignUp
      </Link>
    </div>
  );
};

export default Step2;
