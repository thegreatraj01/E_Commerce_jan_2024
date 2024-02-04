import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function UserLayout({ children }) {
    return (
        <>
            <Navbar />
            {children && children}
            <Footer />
        </>
    )
}

export default UserLayout;