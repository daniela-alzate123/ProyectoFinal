import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/Login/Login'
import Home from '../pages/home/Home'

const Router = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route element={<PublicRouter isLogout={false}/>}>
              <Route index element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
            </Route>
            <Route element={<PrivateRouter isLogout={false} />}>
              <Route path= 'home' element={<Home/>}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default Router
