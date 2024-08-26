import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Web from './Web'
import Form from './Form'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Web />} />
            <Route path='/admin' element={<Home />} />
            <Route path='/admin/create_form' element={<Form />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default AllRoutes