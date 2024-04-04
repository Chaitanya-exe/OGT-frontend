import React, { useContext } from 'react'
import Head from './Head'
import Search from './Search'
import Person from './Person'
import ChatBox from './chat/ChatBox'
import Persons from './Persons'
import { GlobalContext } from '../Context'

const Inedx = () => {
  const {openChat,setOpenChat} = useContext(GlobalContext)
  return (
    <>
    <div className='relative text-slate-900  p-3 m-2'>
    <div className='space-y-3 flex-col justify-start items-start'>
      <Head />
      <Search />
      <div className='flex space-x-2'>
      <Persons />
      {/* <ChatBox /> */}

      </div>

    </div>
    </div>
    {
      openChat && <ChatBox />
    }

    </>
  )
}

export default Inedx
