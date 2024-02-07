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




    const contextValue = { allproduct };
    // console.log(cartItem)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;