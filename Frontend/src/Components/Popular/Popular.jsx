import React, { useEffect, useState } from 'react'
import './Popular.css';
// import data_product from '../Assets/data';
import Item from '../Items/Item';
import axios from 'axios';
import { API_BASE_URL } from '../../confij';
const Popular = () => {
    const [data_product, setdata_product] = useState([]);

    useEffect(() => {
        const fetchnew_collection = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/popularinwomen`);
                if (response.status === 200) setdata_product(response.data.data);
            } catch (error) {
                console.error('fetch new collection error', error);
            }
        };

        fetchnew_collection();
    }, [])

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular;