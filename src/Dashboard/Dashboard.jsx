import React, { useState, useContext } from 'react'
import { GlobalContext } from "../Context"

const Dashboard = () => {
  const {user, token} = useContext(GlobalContext);
  const [showDashboard, setShowDashboard] = useState(true)
  return (
    <div className=''
    onClick={() => setShowDashboard(prev => !prev)} >
      {`${user.username}`}
    </div>
  )
}

export default Dashboard
