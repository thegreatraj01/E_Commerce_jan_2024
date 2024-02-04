import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CheckAdmin() {
    const user = useSelector(state => state.user);
    const admin = user.isAdmin;
    return admin ? <Outlet /> : <Navigate to='/' />;
}

export default CheckAdmin;