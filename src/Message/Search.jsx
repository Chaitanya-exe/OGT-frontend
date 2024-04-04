import React from 'react'
import { CgSearch } from "react-icons/cg";
import { CgMenuCheese } from "react-icons/cg";



const Search = () => {
  return (
    
    <div className='flex w-full space-x-2 justify-start items-center '>
    <CgSearch className='-mr-8 z-10' />
    <div className='flex grow'>
      <input type='text'
      name='search'
      placeholder='serach messages'
      className='outline-none rounded-md w-1/ bg-slate-200 px-8 py-1'
       />
    </div>
<CgMenuCheese  />

    </div>

  )
}

export default Search
