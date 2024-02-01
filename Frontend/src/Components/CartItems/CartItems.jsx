import React, { useContext, useEffect } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { toast } from 'react-toastify';

const CartItems = () => {
    const { allproduct, getTotalCartAmount, removeFromCart, cartItem, addToCart, deleteItem } = useContext(ShopContext);
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
    useEffect(() => console.log('from cart'))

    // console.log(allproduct,cartItem)
    // console.log(getTotalCartAmount())

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
            {allproduct.map((e) => {
                const quantity = cartItem && cartItem[e.id] ? cartItem[e.id] : 0;

                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="productimage" className='cartproduct-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className='cartitems-quantity'>
                                    <button onClick={() => removeFromCart(e.id)}>< FaMinus /></button>
                                    <p >{quantity}</p>
                                    <button onClick={() => addToCart(e.id)}><FaPlus /></button>
                                </div>
                                <p>${e.new_price * quantity}</p>
                                <MdDelete id='cartdeleteicon' onClick={() => { deleteItem(e.id); notifyDelete(); }} />
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
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-icon">
                            <p>Shopping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-icon">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
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
