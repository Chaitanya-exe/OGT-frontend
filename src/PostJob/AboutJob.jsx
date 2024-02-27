import React, { useState } from 'react'
import Head from './Head'

const JobLi=["Software Development","Web Development","Design","Network Engineer","Database Administrator","Systems Administrator","Data Scientist","Security Analyst","UX/UI Designer","Cloud Engineer","Blockchain Developer","Cybersecurity Engineer","Machine Learning Engineer","AI Engineer","Project Manager","Technical Support Engineer","Business Analyst","IT Manager"]



const AboutJob = () => {
  const [showOptions,setShowOptions] = useState(false)
  const [showInput,setShowInput] = useState(false)
  const Location=["India","Northern America","UK","Canada","Germqnay","America","France","Europe","USA","LATAM","Other:please specify"]


const handleClick=(index)=>{
  if(index==Location.length-1){
    setShowInput(true)  }
  else{
    setShowInput(false)
  }
}


  return (
    <>
    <job >
    <Head />
    <form className='text-sm m-8 pt-5 *:my-3 text-slate-900'>
    <div className='*:my-1'>

        <h1 className='text-xl pb-4 font-bold font-rio'>Tell us about 
         <span className='text-blue-600'> your Job</span></h1>
         <h2 className=' font-semibold '>How to apply?*</h2>
         <p className=' italic text-sm font-thin '>Enter the URL of your public job page. Alternatively, you can provide an email address (@). We'll redirect applicants directly to you there.
</p>

<input id='email' name='email' type='email' required autoComplete='off' placeholder='https://your-company.com/careers/your-job-title'
className='w-full border text-slate-500 p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
     
    </div>
    <div className=' *:my-1'>
    <h2 className=' font-semibold'>Job Title*</h2>
    <input id='job' name='job title' type='text' autoComplete='off' required placeholder='e.g. Lead developer,Project Manager'
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />

    </div>
    <div className=' *:my-1'>
    <h2 className=' font-semibold'>Catergory*</h2>
    <select name="cars" className='w-full bg-white border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md'>
    {JobLi.map((category)=>(
  <option value="">{category}</option>

    ))}
</select>

    </div>
    <div className=' *:my-1'>
    <h2 className=' font-semibold'>Employment Type*</h2>
    <select name="cars" className='w-full bg-white border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md'>
  <option value="volvo">Part-time</option>
  <option value="saab" selected>Full-time</option>
  <option value="mercedes">Freelance</option>
  <option value="audi">Internship</option>
  <option value="volvo">Contrast</option>
  <option value="volvo">Other</option>

</select>

    </div>
    <div className=' *:my-1'>
    <h2 className='font-semibold text-sm'>Is there a Remote Location Requirement?</h2>
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
    

       <label onChange={()=>handleClick(index)}  className={index=== Location.length-1 ?"flex peer " :"flex"} for={index}>
                <input  className="mr-3"  type="checkbox"  id={index} name="location" />
 {place}
     </label>

   ))}
    </div>
    </div>
  
     {showInput && (
     <input id={Location.length-1} name='other location' type='text' required placeholder='jiji'
className='pe hidde w-full border p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />

     )
     }

    </div>
    <div className='*:my-1'>
    <h2 className=' font-semibold text-sm'>Salary</h2>
    <input id='email' name='email' type='email' autoComplete='off' required placeholder='Best format is $USD per year,such as: "$50k - $60k'
className='w-full border  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
<p className=' italic text-sm font-thin tracking-wide'><span className='text-slate-900 font-semibold '>Highly Recommended</span>: providing salary will give your job more visibility. It's mandatory in some US states and other countries. It's also needed for Google to list your job. Best format is $USD per year, such as: "$50k - $60k".</p>
    </div>
    <div className=' *:my-1'>
    <h2 className='font-semibold text-sm'>Job Description*</h2>
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
