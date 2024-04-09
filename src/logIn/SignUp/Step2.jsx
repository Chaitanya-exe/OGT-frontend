import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context";
import axios from "axios";
import * as yup from "yup"



const Step2 = () => {
  const { user, setUser, setToken, setISUserLoggedIn } =
  useContext(GlobalContext);
  const [validationError,setValidationError] = useState([])
  // console.log(validationError)
  const validationSchema = yup.object().shape({
    username : yup.string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username cannot be longer than 20 characters'),
  password: yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/\d/, 'Password must contain a number'),
  // confirmPassword: yup.string()
  //   .trim()
  //   .oneOf([yup.ref('password'), null], 'Passwords must match'), // Ensure confirm password matches password

  })
  return (
    <div className="border rounded-lg p-6 mt-12 w-full m-40 flex-col justify-center items-center space-y-8">
      {validationError && <p className="text-red-500 text-lg"> {validationError} </p>}
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
        // to={"/home"}
        onClick={async () => {
          try {
             validationSchema.validate(user)
            const data = user;
            const response = await axios.post(
              "http://localhost:5000/api/users/register",
              data
            );
            const resData = response.data;
            setToken(resData.token);
            setISUserLoggedIn(true);
            setUser({
              ...resData.user,
              password: "",
            });

          } catch (err) {
            if(err.name ==='ValidationError'){
              // const errorMessage = err.inner[0].message; // Extract validation message
    // setValidationError(errorMessage); 
    // console.log(validationError)
    // return; 
              // setValidationError(err.inner.map((error) => error.message
              // ))
              setValidationError(err.message)
            }else if(err.response){
            console.log(err.response.data);

            }
            //  else{
            //   console.error(err.message)
            // }

          }
        }}
        className="button w-fit mx-auto block"
      >
        SignUp
      </Link>
    </div>
  );
};

export default Step2;
