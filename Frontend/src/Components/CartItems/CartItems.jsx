import React from 'react';
import './CartItems.css';
// import remove_icon from '../Assets/cart_cross_icon.png';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../confij';
import { removeFromCart, addToCart, decreaseItemCount ,getTotalCartAmount} from '../../ReduxToolkit/Slices/CartSlice.js';
import { useDispatch } from 'react-redux';

const CartItems = () => {
    const cartItem = useSelector(state => state.cartslice.cart);
    const dispatch = useDispatch();
    const totalCartAmount = useSelector(getTotalCartAmount);
    // console.log(cartItem);


    const notifyDelete = () => {
        toast.error('Item removed!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    };


    return (
        <div className='CartItems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartItem.map((e) => {

                if (0 < 1) {
                    return (
                        <div key={e._id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={`${API_BASE_URL}/images/${e.image}`} alt="productimage" className='cartproduct-icon' />
                                <p className='m-0'>{e.name}</p>
                                <p className='m-0'>${e.new_price}</p>
                                <div className='cartitems-quantity'>
                                    <button onClick={() => dispatch(decreaseItemCount(e._id))}>< FaMinus /></button>
                                    <p className=' my-auto'>{e.count}</p>
                                    <button onClick={() => dispatch(addToCart(e))}><FaPlus /></button>
                                </div>
                                <p className='m-0'>${(e.new_price * e.count).toFixed(2)}</p>
                                <MdDelete id='cartdeleteicon' onClick={() => { dispatch(removeFromCart(e._id)); notifyDelete(); }} />
                                {/* <img src={remove_icon} alt="deleteicon" /> */}
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals </h1>
                    <div>
                        <div className="cartitems-total-icon">
                            <p>Subtoatal</p>
                            <p>${totalCartAmount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-icon">
                            <p>Shopping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-icon">
                            <h3>Total</h3>
                            <h3>${totalCartAmount.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="carticon-promocode">
                    <p>if you have a promo code, Enter it here</p>
                    <div className='caeritems-promobox'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
