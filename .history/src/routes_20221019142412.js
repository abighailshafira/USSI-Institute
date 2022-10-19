import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </>
    )
}

export default RouteApp