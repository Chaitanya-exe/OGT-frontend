import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

const Step2 = () => {

  return (
    <div className=' mt-12  space-y-6'>
     <label className="capitalize font-semibold" > Email Address
            <input
            required
            id="EmailAddress"
            type="email" name="Email Address" 
            placeholder="Your email address"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize font-semibold" >Password
            <input
            required
            id="Password"
            type="password" name="Password" 
            placeholder="Enter Password"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <label className="capitalize font-semibold" >Confirm Password
            <input
            required
            id="confirm password"
            type="text" name="confirm password" 
            placeholder="Confirm Password"
            className="border p-2 my-1 font-normal rounded-sm block outline outline-1 outline-purple-400"
            ></input>
          </label>
          <Link to={"/home"}
            className='button mx-auto block'>SignUp</Link>
   



    </div>
  )
}

export default Step2
