import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../confij';
// import allproduct from '../Components/Assets/all_product';

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {

    const [allproduct, setallproduct] = useState([]);
    // const [loading, setLoading] = useState(true);

    const fetchallproducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/allproducts`);
            if (response.status === 200) {
                setallproduct(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching products", error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchallproducts();
    }, []);




    const getDeflultCart = () => {
        let cart = {};
        for (let i = 0; i < allproduct.length + 1; i++) {
            cart[i] = 0;
        }
        // console.log("Cart", cart);
        return cart;
    }
    const [cartItem, setcartItem] = useState(getDeflultCart());
    // console.log(cartItem)

    const addToCart = (itemId) => {
        console.log(itemId , 'add to cart')
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }


    const removeFromCart = (itemId) => {
        setcartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: Math.max(1, prev[itemId] - 1) };
            return updatedCart;
        });
    };


    const deleteItem = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: 0 }));
    };


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = allproduct.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
                console.log(itemInfo)
            }
        }
        return totalAmount;
    }

    const totalItemInCart = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = { allproduct, cartItem, addToCart, removeFromCart, getTotalCartAmount, totalItemInCart, deleteItem };
    // console.log(cartItem)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;