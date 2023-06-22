import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'))
const Navbar = React.lazy(()=>import('./navbar/Navbar'))
const Schedules = React.lazy(()=>import('./schedules/Schedules'))
const Settings = React.lazy(()=>import('./settings/Settings'))
const Transactions = React.lazy(()=>import('./transactions/Transactions'))
const Users = React.lazy(()=>import('./users/Users'))

const PageRoute = () => {
    return (
        <div className='app-container'>
              <Navbar />
              <div className='main-container'>
                <Routes>
              <Route exact path='' element={<Navigate replace to={"dashboard"} />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/schedules' element={<Schedules />} />
              <Route exact path='/settings' element={<Settings />} />
              <Route exact path='/transactions' element={<Transactions />} />
              <Route exact path='/users' element={<Users />} />
              </Routes>
              </div>
        </div>
    );
};

export default PageRoute;