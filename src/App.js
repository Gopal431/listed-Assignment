import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const PageRoute = React.lazy(() => import('./page/PageRoute'));
const AuthRoute = React.lazy(() => import('./auth/AuthRoute'));
const App = () => {
  const isLogin = (true);
  return (
    <div>
      <Suspense fallback={''}>
        <BrowserRouter>
          <Routes >
            <Route path='' exact element={<Navigate replace to={"/auth"} />} />
            <Route exact path='auth/*' element={!isLogin ? (<AuthRoute />) : (<Navigate replace to={"/pages"} />)} />
            <Route exact path='pages/*' element={<  PageRoute />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}
export default App