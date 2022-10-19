import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default RouteApp