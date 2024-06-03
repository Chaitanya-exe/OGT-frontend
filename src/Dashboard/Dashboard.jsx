import React, { useState, useContext } from 'react'
import { GlobalContext } from "../Context"

const Dashboard = () => {
  const {user, token} = useContext(GlobalContext);
  const [showDashboard, setShowDashboard] = useState(true)
  return (
    <div className='bg-red-400 w-[20vw]  sticky right-0'
    onClick={() => setShowDashboard(prev => !prev)} >
      {`${user.username}`}
    </div>
  )
}

export default Dashboard
