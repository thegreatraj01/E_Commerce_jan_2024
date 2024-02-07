import React, {  useEffect, useState } from 'react';
import './RealeatedProduct.css';
import Item from '../Items/Item';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../confij';

const RealeatedProduct = () => {
    const currentProductId = useParams().productid;
    const [data_product, setData_product] = useState([]);

    useEffect(() => {
        const fetchrealetedproduct = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/realetedproducts/${currentProductId}`);
                if(response.status === 200) {
                    setData_product(response.data.data);
                }
            } catch (error) {
                console.error('fetchrealetedproduct error', error);
            }
        };
        fetchrealetedproduct();
    }, [currentProductId])


    return (
        <div className='RealeatedProduct'>
            <h1>Related Product</h1>
            <hr />
            <div className='relatedproduct-item'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RealeatedProduct;