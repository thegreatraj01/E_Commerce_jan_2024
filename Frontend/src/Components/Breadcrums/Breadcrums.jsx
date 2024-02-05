import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrums.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
    return (
        <div className='breadcrums'>
            <Link to='/'> HOME</Link>
            <img src={arrowIcon} alt="arrowicon" />
            <Link to='/'> SHOP </Link>
            {product && (
                <>
                    <img src={arrowIcon} alt="arrowicon" />
                    <Link to={`/${product.category}`}>{product.category}</Link>
                    <img src={arrowIcon} alt="arrowicon" />
                    {product.name}
                </>
            )}
        </div>
    );
};

export default Breadcrums;
