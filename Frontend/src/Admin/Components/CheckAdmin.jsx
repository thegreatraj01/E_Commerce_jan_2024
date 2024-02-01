import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function CheckAdmin() {

    const admin = true;
    return admin ? <Outlet /> : <Navigate to='/' />;
}

export default CheckAdmin;