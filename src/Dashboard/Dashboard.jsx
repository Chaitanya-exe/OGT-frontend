import React, { useState } from 'react'

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true)
  return (
    <div className=''
    onClick={() => setShowDashboard(prev => !prev)} >
      welcome ~
    </div>
  )
}

export default Dashboard
