import React from 'react'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import HodLogin1 from './HodLogin1'
import HodLogin2 from './HodLogin2'
import StaffLogin1 from './StaffLogin1'
import StaffLogin2 from './StaffLogin2'


function Task5New({leaveObj}) {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/hodLogin1' element={<HodLogin1/>} />
                <Route path='/hodLogin2' element={<HodLogin2/>} />
                <Route path='/staffLogin1' element={<StaffLogin1/>} />
                <Route path='/staffLogin2' element={<StaffLogin2/>} />
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Task5New