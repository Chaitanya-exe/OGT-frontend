import React from 'react'
import {Link} from "react-router-dom"
import { MdArrowForwardIos } from "react-icons/md";


const Links = () => {
  return (
    <div className='capitalize flex items-center gap-2  *:font-thin'>
      <Link to="/Home" className='underline underline-offset-2'>back to remote jobs</Link>
      <MdArrowForwardIos  className='size-3'/>
      <Link to="/jobDesc" className='underline underline-offset-2 ' >Software development</Link>
    </div>
  )
}

export default Links
