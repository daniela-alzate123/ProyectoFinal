import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isLogout}) => {
  return (
    <div>
      {isLogout ? <Outlet/> : <Navigate to= {'/'}/>}
    </div>
  )
}

export default PrivateRouter
