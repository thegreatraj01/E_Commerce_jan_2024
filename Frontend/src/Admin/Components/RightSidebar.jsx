import React from 'react';
import './rightsidebar.css';
import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";

function RightSidebar() {
    return (
        <div className='right-sidebar'>
            <div className="row m-0 p-0">
                <div className='p-0 '>
                    <div className='nav-button-container'><MdOutlineProductionQuantityLimits /> <button className='nav-button'> <Link to='/admin/addproduct' > Add Product</Link></button></div>
                    <div className='nav-button-container' ><IoReorderFour /><button className='nav-button'><Link to='/admin/productlist'>Products List</Link></button></div>
                    <div className='nav-button-container' ><FcSalesPerformance /><button className='nav-button'><Link to='/admin/orders'>orders</Link></button></div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;
