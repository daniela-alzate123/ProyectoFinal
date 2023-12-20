import React from 'react'
import {  Navigate, Outlet} from 'react-router-dom'

const PublicRouter = ({isLogout}) => {
  return (
    <div>
       {isLogout ? <Navigate to={'home'}/> : <Outlet/>}
    </div>
  )
}

export default PublicRouter
