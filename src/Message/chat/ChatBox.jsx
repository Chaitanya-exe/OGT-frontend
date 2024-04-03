import React,{useContext} from 'react'
import Sender from './Sender'
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from '../../Context';

const ChatBox = () => {
  const {openChat,setOpenChat} = useContext(GlobalContext)

  return (
    <>
    <div className='bg-white rounded-md w-96 *:p-2  absolute right-full mx-8 bottom-3'>

    <div className='flex sticky top-0 border-b-2 items-center justify-between '>
    <div className='flex justify-center items-center space-x-3'>
      <div className='w-12 h-12 border flex justify-center items-center rounded-full overflow-hidden'>
        <img className='' 
        src='' alt='hi'

        />
      </div>
      <p>Name</p>

    </div>
      <div className='flex space-x-3'>

      <RxCross2 onClick={() => setOpenChat(false)}
      className='hover:scale-90 size-5' />
      {/* <FiMoreHorizontal />
      <FaEdit />
      <FaChevronDown /> */}


      </div>
    </div>
    <div className=''>
      <Sender />
    </div>
    </div>

    </>
  )
}

export default ChatBox
