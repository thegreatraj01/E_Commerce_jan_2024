import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../confij';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allproduct, setallproduct] = useState([]);

    const fetchallproducts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/allproducts`);
            if (response.status === 200) {
                setallproduct(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        fetchallproducts(); // Initial fetch when component mounts

        // Set interval to fetch products every 10 minutes
        const intervalId = setInterval(fetchallproducts, 10 * 60 * 1000);

        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const contextValue = { allproduct };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;