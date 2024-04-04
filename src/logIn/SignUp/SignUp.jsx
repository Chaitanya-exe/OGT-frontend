import React, { useContext ,useEffect, useState} from "react";
import { MdCancel } from "react-icons/md";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { GlobalContext } from "../../Context";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const SignUp = ({setStep2SignUp }) => {
  const { JobLi,setIsLoginFormOpen } = useContext(GlobalContext);
  const [conuntryList,setCountryList] = useState([])

  const [FirstName,setFirstName] = useState('')
  const [termsChecked,setTermsChecked] = useState(false)
  const [age,setAge] = useState('')
  const [isFormValid,setIsFormValid] = useState(false)


  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
const countryNames = data.map(country => country.name.common);
countryNames.sort((a, b) => a.localeCompare(b));
setCountryList(countryNames)
})
.catch(error => {
console.error('Error fetching country names:', error);
});


})
useEffect(()=>{
  setIsFormValid(FirstName.trim()!=='' && age.trim()!== '' && termsChecked)

},[FirstName,age,termsChecked])
  return (
    <>
      <div className=" p-4 border rounded-lg">
      <div className=" space-y-4 w-fit p-4 ">

        <div className="flex justify-between border-b-2 pb-3">
          <h2 className="text-xl font-semibold tracking-wide">Create Account</h2>
          <Link to="/Home" onClick={()=> setIsLoginFormOpen(true)} className="text-sm underline text-purple-600 ">Sign In</Link>
        </div>
        <div className="text-slate-600 pt-4 grid grid-cols-2 gap-3">
          <label className="capitalize font-semibold" >First name
            <input
            required
            id="name"
            type="text" name="name" 
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className="border w-full p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>

          <label className="capitalize font-semibold" >Last name
            <input
            required
            id="name"
            type="text" name="name" 
            placeholder="Last name"
            className="border w-full p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          
          <label className="capitalize font-semibold" > Age
            <input
            required
            onChange={(e) => setAge(e.target.value)}
            // min="10" max="150"
            id="name"
            type="date" name="name" 
            placeholder="age"
            className="border bg-white w-full p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            >

            </input>
          </label>

          <label className="capitalize font-semibold" > country
          <select className=" bg-white p-2.5 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400">
          {
             conuntryList.map((country)=>(

            <option>{country}</option>
            ))
          }
          </select>
            {/* <input
            required
            min="10" max="150"
            id="name"
            type="text" name="name" 
            placeholder="age"
            className="border w-full p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input> */}
          </label>
<label className="capitalize font-semibold">
  <input
  type="radio"
  name="employee"
  className="mr-3"
   />
   Employee
</label>
<label className="font-semibold capitalize">
  <input
  type="radio"
  name="employee"
  className="mr-3"
   />
   company
</label>



          <label className="capitalize col-span-2  font-semibold" >Mobile Number
            <input
            required
            id="Phone number"
            type="tel" name="name" 
            placeholder="Phone number"
            className="border w-ful col-span-2  p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>

          <label  className="col-span-2 capitalize font-semibold" for="message">Desciption 
<textarea id="message" name="message" rows="10" cols="76"
className="border rounded outline-none p-3"

></textarea>
          </label>
          <label className=" align-baseli content-center">

          <input
           type="checkbox" 
           onChange={(e) => setTermsChecked(e.target.checked)}
          required
           className="size-5 mr-3"></input>
          I agree to <span className="text-purple-600">Terms & Conditions</span>
          </label>
        </div>
          <button disabled={!isFormValid} onClick={()=>{
            setStep2SignUp(true)

          }} className="block mx-auto button">Next</button>
      </div>
      </div>

      {/* <AnimatePresence>
        <motion.div
          variants={backdrop}
          initial="hidden"
          exit="hidden"
          animate="visible"
          className="w-2/3 md:w-1/3 bg-blue-300 z-50 shadow rounded-3xl overflow-hidden my text-center text-slate-800 "
        >
          <div className="px-9 font-light tracking-tight">
            <div className="flex items-baseline space-x-1">
              <h1 className="text-4xl tracking-wider my-4 font-semibold font-riot capitalize ">
                Get daily remote job opportunities in your inbox
              </h1>
              <button onClick={onCancel}>
                <MdCancel className="size-7 hover:opacity-60" />
              </button>
            </div>
            <p className="mt-6">
              No middlemen, no spam, no infinite scrolling.Get relevant job
              opportunities, one email at a time.
            </p>
            <div className="space-y-4 my-5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="off"
                placeholder="Enter email address"
                className="w-full border focus:text-sm focus:font-normal bg-white p-2 text-xs  focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
              />
              <select
                name="cars"
                className="w-full bg-white border p-2 text-xs focus:font-normal focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md"
              >
                {JobLi.map((category) => (
                  <option value="">{category}</option>
                ))}
              </select>
              <button className="button w-full">SignUp for free</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence> */}
    </>
  );
};

export default SignUp;