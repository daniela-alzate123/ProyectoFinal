import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/Login/Login'

import { useSelector } from 'react-redux'
import Principal from '../pages/principal/Principal'
import SignUp from '../pages/signUp/SignUp'




const Router = () => {

  const {isLogout} = useSelector(state => state.auth)
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route element={<PublicRouter isLogout={isLogout}/>}>
              <Route index element={<Login/>}/>
              <Route path='signUp' element={<SignUp/>}/>
            </Route>
            <Route element={<PrivateRouter isLogout={isLogout} />}>
              <Route path= 'principal' element={<Principal/>}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default Router
