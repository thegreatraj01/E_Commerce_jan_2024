// import React, { useContext } from 'react';
import './Productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
// import { ShopContext } from '../../Context/ShopContext';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../../confij';
import Loader from '../Loader/Loader';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../ReduxToolkit/Slices/CartSlice.js';



const ProductDisplay = ({ product }) => {
    const dispatch = useDispatch();

    const notifySuccess = () => {
        toast.success('Added To Cart', {
            position: 'top-right', // You can customize the position
            autoClose: 3000, // Time in milliseconds for the notification to automatically close
            hideProgressBar: false, // Whether to show a progress bar or not
            closeOnClick: true, // Close the notification when clicked
            pauseOnHover: false, // Pause the autoClose timer when hovering over the notification

        });
    };

    // Check if product is available
    if (!product) {
        return <Loader/>; // Placeholder or message when product is not available
    }
    return (
        <div className='Product-display'>
            <div className="product-dispaly-left">
                <div className="product-display-img-list">
                    <img src={`${API_BASE_URL}/images/${product.image}`} alt="productimg" />
                    <img src={`${API_BASE_URL}/images/${product.image}`} alt="productimg" />
                    <img src={`${API_BASE_URL}/images/${product.image}`} alt="productimg" />
                    <img src={`${API_BASE_URL}/images/${product.image}`} alt="productimg" />
                </div>
                <div className="product-display-img">
                    <img className='productdisplay-main-img' src={`${API_BASE_URL}/images/${product.image}`} alt="productmainimage" />
                </div>
            </div>
            <div className="product-dispaly-right">
                <h1>{product.name}</h1>
                <div className="product-displau-right-star">
                    <img src={star_icon} alt="staricon" />
                    <img src={star_icon} alt="staricon" />
                    <img src={star_icon} alt="staricon" />
                    <img src={star_icon} alt="staricon" />
                    <img src={star_dull_icon} alt="staricon" />
                    <p>122</p>
                </div>
                <div className="product-dispaly-right-prices">
                    <div className="product-display-right-old">${product.old_price}</div>
                    <div className="product-display-right-new">${product.new_price}</div>
                </div>
                <div className="product-display-right-discription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus accusantium ea explicabo sunt harum sint qui, consequuntur illum, itaque quos a vero repellendus doloremque enim minus tempora similique! Nostrum, inventore!
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size </h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={(e) => { e.preventDefault(); dispatch(addToCart(product)); notifySuccess(); }}>
                    ADD TO CART
                </button>

                <p className='product-dispaly-right-category'><span>Category: </span>Women , T-Shirt , Crop Top</p>
                <p className='product-dispaly-right-category'><span>Tags: </span> Modern , Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay;