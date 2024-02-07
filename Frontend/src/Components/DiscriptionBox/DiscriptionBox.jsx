import React from 'react';
import './discription.css';

const DiscriptionBox = ({product}) => {
    // console.log(product)
    return (
        <div className='discription-box'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box"> Description</div>
                <div className="descriptionbox-nav-box fade">Reviews </div>
            </div>
            <div className="descriptionbox-description">
                <h4>{product.description}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi voluptas quod possimus amet ullam et deserunt. Aliquam ullam animi quasi consequatur, autem eaque vel aperiam labore aliquid, corporis eos!
                </p>
            </div>
        </div>
    )
}

export default DiscriptionBox