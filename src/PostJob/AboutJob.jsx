import React from 'react'

const AboutJob = () => {
  return (
    <>
    <form>
        <h1>Tell us about
         <span>
         your Job</span></h1>
         <h2>How to apply?*</h2>
         <p className=' italic font-thin '>Enter the URL of your public job page. Alternatively, you can provide an email address (@). We'll redirect applicants directly to you there.
</p>
<input id='email' name='email' type='email' required placeholder='https://your-company.com/careers/your-job-title'
className='' />
    </form>
      
    </>
  )
}

export default AboutJob
