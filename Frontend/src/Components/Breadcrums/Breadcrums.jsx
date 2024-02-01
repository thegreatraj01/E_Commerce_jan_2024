import React from 'react';
import { Link } from 'react-router-dom'
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
const Breadcrums = (props) => {
    const { product } = props;
    return (
        <div className='breadcrums'>
            <Link to='/'> HOME</Link> <img src={arrow_icon} alt="arrowicon" />  <Link to='/'> SHOP </Link> <img src={arrow_icon} alt="arrowicon" /> <Link to={`/${product.category}`}>{product.category}</Link>
  <img src={arrow_icon} alt="arrowicon" /> {product.name}
        </div>
    )
}

export default Breadcrums