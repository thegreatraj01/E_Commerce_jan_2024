import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../confij';
const Item = (props) => {
    // console.log(props)
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0, 0)} src={`${API_BASE_URL}/images/${props.image}`} alt={props.iamge} />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div >
    )
}

export default Item