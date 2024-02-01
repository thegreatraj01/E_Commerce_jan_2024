import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Table from 'react-bootstrap/Table';
import Layout from '../../Components/Layout/Layout';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../../confij';
import Spinner from 'react-bootstrap/Spinner';

function ProductList() {

    const [allProduct, setAllProduct] = useState([]);

    const fetchAllProduct = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/allproducts`);
            setAllProduct(response.data.data);
        } catch (error) {
            console.error('fetching all products', error);
        }
    };

    useEffect(() => {
        fetchAllProduct();  // Call the function directly
    }, []);

    const handleDeleteProduct = async (id) => {
        const action = window.confirm('Are you sure you want to delete');
        try {
            if (action) {
                const response = await axios.delete(`${API_BASE_URL}/removeproduct/${id}`);
                console.log(response);
                if (response.status === 200) {
                    fetchAllProduct();  // Call the function to update the product list
                }
            }
        } catch (error) {
            console.log('delete product', error);
        }
    };

    return (
        <Layout>
            {allProduct ? <Container className='p-0 vh-100 overflow-auto list-container'>
                <Table responsive bordered striped="columns" className='table-container' >
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>New_price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProduct?.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td className='td-background-set' style={{ backgroundImage: `url(http://localhost:5000/images/${product?.image})` }}></td>
                                    <td className='td-flex'>{product?.name}</td>
                                    <td className='td-flex td-discription'><p>{product?.description}</p></td>
                                    <td className='td-flex'>{product?.new_price}</td>
                                    <td className='td-flex'>
                                        <FaRegEdit className=' fs-3 me-2' />
                                        <MdDelete fill='red' className=' fs-3 ms-3' onClick={() => handleDeleteProduct(product._id)} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container> : <Spinner animation="grow" />}
        </Layout>
    );
}

export default ProductList;
