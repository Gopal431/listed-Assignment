import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = React.lazy(()=> import('./login/Login'))

const AuthRoute = () => {
  return (
    <Routes>
      <Route exact path=''  element={<Navigate replace to={"login"} />}/>
      <Route exact path='login'  element={<Login />}/>
    </Routes>
  )
}

export default AuthRoute