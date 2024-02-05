import React, { useEffect, useState } from 'react';
import './NewCollection.css';
// import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';
import axios from 'axios';
import { API_BASE_URL } from '../../confij';

const NewCollection = () => {
    const [new_collection, setNewCollection] = useState([]);

    useEffect(() => {
        const fetchnew_collection = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/newcollection`);
                if (response.status === 200) setNewCollection(response.data.data);
            } catch (error) {
                console.error('fetch new collection error', error);
            }
        };

        fetchnew_collection();
    }, [])
    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />

            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollection