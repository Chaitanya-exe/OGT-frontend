import React, { useState } from 'react'
import Head from './Head'
// import Tippy from '@tippyjs/react'
// import 'tippy.js/dist/tippy.css'; 
// import "tippy.js/themes/material.css";
// import "tippy.js/animations/perspective.css";


const AboutJob = () => {
  const [showOptions,setShowOptions] = useState(false)
  const Location=["Northern America","UK","Canada","Germqnay","America","France","Europe","USA","LATAM","Other:please specify"]


// useEffect(()=>{
    
//       setShowOptions(no)

//   },[showOptions])


  return (
    <>
    <job>
    <Head/>
    <form className='text-sm m-8 pt-5 *:my-3'>
    <div className='*:my-1'>

        <h1 className='text-xl pb-4 font-bold font-rio'>Tell us about 
         <span className='text-orange-500'> your Job</span></h1>
         <h2 className='text-slate-800 font-semibold '>How to apply?*</h2>
         <p className=' italic text-sm font-thin '>Enter the URL of your public job page. Alternatively, you can provide an email address (@). We'll redirect applicants directly to you there.
</p>
{/* <Tippy content={"please fill out this field"} trigger='click'   theme="material"
          delay={300}
          animation="perspective"> */}

<input id='email' name='email' type='email' required autoComplete='off' placeholder='https://your-company.com/careers/your-job-title'
className='w-full border text-slate-500 p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
          {/* </Tippy> */}
    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold'>Job Title*</h2>
    <input id='email' name='email' type='email' autoComplete='off' required placeholder='e.g. Lead developer,Project Manager'
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />

    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold'>Catergory*</h2>
    <select name="cars" className='w-full border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md'>
  <option value="volvo" selected>Software development</option>
  <option value="saab">Marketing</option>
  <option value="mercedes">Sales</option>
  <option value="audi">Design</option>
  <option value="volvo">Product</option>
  <option value="saab">business</option>
  <option value="mercedes">Sales</option>
  <option value="audi">Design</option>
</select>

    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold'>Employment Type*</h2>
    <select name="cars" className='w-full border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md'>
  <option value="volvo">Part-time</option>
  <option value="saab" selected>Full-time</option>
  <option value="mercedes">Freelance</option>
  <option value="audi">Internship</option>
  <option value="volvo">Contrast</option>
  <option value="volvo">Other</option>

</select>

    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold text-sm'>Is there a Remote Location Requirement?</h2>
    <div className='flex relative justify-between font-semibold text-sm'>

  <label for="Worldwide" onClick={()=> setShowOptions(false)}>
  <input className='mr-1' type="radio" id="Worldwide" name="location" value="Worldwide" />
  Worldwide
  </label>
  <label for="USA" onClick={()=> setShowOptions(false)} >
  <input className='mr-1' type="radio" id="USA" name="location" value="USA only" />
  USA only</label>
  <label for="other" onClick={()=>setShowOptions(true)}
   >
  <input className='pee mr-1 rad' type="radio" id="other" name="location" value="Other location requirements" />
  Other location requirements
  </label>
    </div>
    <div className={showOptions?"block":"hidden"}>
    <div className='grid font-thin grid-cols-3 lg:grid-cols-4 gap-x-5 my-5'>
    {Location.map((place,index)=>(
      <React.Fragment>

       <label  className={index=== Location.length-1 ?"flex peer " :"flex"} for={index}>
                <input  className="mr-3"  type="checkbox"  id={index} name="location" />
 {place}
     </label>
     {index===Location.length-1 && (
     <input id='email' name='email' type='email' required autoComplete='off' placeholder='jiji'
className='peer-target:block hidden w-full border text-slate-500 p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />

     )}




      </React.Fragment>  
    )
    )
    }
    </div>
     {/* <label className="flex" for="2">
                <input  className="mr-3"  type="checkbox"  id="2"  name="location"  value="north america"/>
America
     </label>
     <label className="flex " for="3">
                <input  className="mr-3"  type="checkbox"  id="3"  name="location"  value="north america"/>
UK
     </label>
     <label className="flex " for="4">
                <input  className="mr-3"  type="checkbox"  id="4"  name="location"  value="north america"/>
Canada
     </label>
     <label className="flex " for="5">
                <input  className="mr-3"  type="checkbox"  id="5"  name="location"  value="north america"/>
Germany
     </label> */}

    </div>
  

    </div>
    <div className='*:my-1'>
    <h2 className='text-slate-800 font-semibold text-sm'>Salary</h2>
    <input id='email' name='email' type='email' autoComplete='off' required placeholder='Best format is $USD per year,such as: "$50k - $60k'
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
<p className=' italic text-sm font-thin tracking-wide'><span className='text-slate-900 font-semibold '>Highly Recommended</span>: providing salary will give your job more visibility. It's mandatory in some US states and other countries. It's also needed for Google to list your job. Best format is $USD per year, such as: "$50k - $60k".</p>
    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold text-sm'>Job Description*</h2>
    <p className=' italic text-sm font-thin tracking-wide'>Don’t worry if that’s not 100% perfect, you can
    <span className='text-slate-900 font-semibold'> always edit after posting</span> your job!</p>
    <p className=' italic text-sm font-thin tracking-wide'>
    If your formatted content looks slightly off, don't worry! A Remotive team member will manually check it and fix it before publishing :)  </p>
    <textarea className='w-full shadow focus:outline-none'
      name="message"
      rows="4"
      cols="50"
      placeholder="Enter your message here"
    ></textarea>
    </div>
    </form>

    </job>
      
    </>
  )
}

export default AboutJob
