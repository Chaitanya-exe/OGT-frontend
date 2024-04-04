import React, { useContext } from 'react'
import { TiAttachment } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { GlobalContext } from '../../Context';




const Type = () => {
    const { receiverText, setReceiverText,messages,setMessages} = useContext(GlobalContext)
    const handleSendMessage=()=>{
        if(receiverText.trim() !== ''){
            const currentTime = new Date().toLocaleTimeString()
            const newMessage = {
                text : receiverText,
                sender : true,
                time :currentTime
            }
            setMessages([...messages, newMessage])
            setReceiverText('')
        }
    }

  return (
    <div className='sticky text-slate-800 bottom-0 flex items-center'> 

    <TiAttachment className='inline-flex size-6 -mr-6 z-10' />
    <input
    type='text'
    value={receiverText}
    onChange={(e)=> {setReceiverText(e.target.value)}}
    name='message'
    placeholder='type a message...'
    className= 'bg-sky-200 px-7 outline-none py-2 w-full rounded'
     />
     <button onClick={handleSendMessage}>

<RiSendPlaneFill onClick={handleSendMessage} className='-ml-7 size-5' />
     </button>



      
    </div>
  )
}

export default Type
