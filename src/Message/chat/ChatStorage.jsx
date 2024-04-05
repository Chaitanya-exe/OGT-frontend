
export const saveMessagesToStorage = (messages) => {
    localStorage.setItem('chatMessages',JSON.stringify(messages))

}

export const getMessagesFromStorage = () => {
    const storedMessages = localStorage.getItem('chatMessages')
    return storedMessages ? JSON.parse(storedMessages) : []
}


import React, { useContext } from 'react'
import { GlobalContext } from '../../Context'

const ChatStorage = () => {
    const {messages} = useContext(GlobalContext)
  return (
    <>
      
    </>
  )
}

export default ChatStorage
