import React from 'react'
import {  Navigate, Outlet} from 'react-router-dom'

const PublicRouter = ({isLogout}) => {
  return (
    <div>
       {isLogout ? <Navigate to={'principal'}/> : <Outlet/>}
    </div>
  )
}

export default PublicRouter
