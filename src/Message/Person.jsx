import { useScroll } from 'framer-motion'
import React, { useContext } from 'react'
import { GlobalContext } from '../Context'

const Person = () => {
  const {messages,setOpenChat,openChat} = useContext(GlobalContext)

  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;

  return (
    <div onClick={() => {setOpenChat(prev => !prev)}} className='hover:bg-slate-200 py-1 px-2 rounded-md flex justify-start items-center space-x-3'>
    <div className='w-12 h-12 flex-shrink-0 border flex justify-center items-center rounded-full overflow-hidden'>
        <img className='' 
        src='' alt='hi'

        />
      </div>
      <div className='w-full'>
      <div className='flex justify-between items-center'>
        <h2 className=''>"name"</h2>
        <p className='text-xs text-end'>{lastMessage?.time}</p>

      </div>
<p className='text-sm truncate max-w-56 text-ellipsis'>{lastMessage?.text} </p>
      </div>
      
    </div>
  )
}

export default Person
