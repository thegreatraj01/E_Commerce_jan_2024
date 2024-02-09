import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../confij';
import './serachform.css';
import { Link } from 'react-router-dom';

function SearchForm() {
    const [allProducts, setAllProducts] = useState([]);
    const [input_text, setinput_text] = useState("");
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(false); // Added loading state

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/allproducts`);
                setAllProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };

        fetchAllProducts();
    }, []); // Removed empty dependency array

    useEffect(() => {
        const fetchRelatedProducts = () => {
            setLoading(true); // Set loading state
            const relatedProduct = input_text && allProducts.filter(item =>
                item.name.toLowerCase().includes(input_text.toLowerCase()) ||
                item.description.toLowerCase().includes(input_text.toLowerCase())
            );
            setRelatedProducts(relatedProduct);
            setLoading(false); // Reset loading state
        };

        fetchRelatedProducts();
    }, [input_text, allProducts]);

    return (
        <div className='search-form-container bg-body-tertiary '>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={input_text} onChange={(e) => { setinput_text(e.target.value) }} />
                {/* Removed Button since search is triggered by input change */}
            </Form>
            {loading ? (
                <p>Loading...</p> // Show loading indicator
            ) : (
                relatedProducts.length > 0 && (
                    <div className="container mt-3 " style={{ height: '50vh', overflowY: 'auto' }}>
                        <div className="row">
                            {relatedProducts.map((product) => (
                                <Link to={`/product/${product._id}`} key={product._id}>
                                    <div className="col-md-12 d-flex py-2 form-item-container text-black"  style={{}}>
                                        {product.image ? (
                                            <img src={`${API_BASE_URL}/images/${product.image}`} alt={product.name} className="img-fluid" height={'50px'} width={'60px'} />
                                        ) : (
                                            <div>No Image</div> // Handle no image case
                                        )}
                                        <div className='ms-3'>
                                            <p>{product.name}</p>
                                            <p>₹ {product.new_price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            )}
            {input_text && relatedProducts.length === 0 && <p className=' mx-auto p-2 fw-bold'>No items found</p>} {/* Moved this line outside of the main conditional block */}
        </div>
    );
}

export default SearchForm;
