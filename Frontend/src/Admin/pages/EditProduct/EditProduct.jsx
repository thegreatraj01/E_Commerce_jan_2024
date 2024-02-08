import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { IoCloudUploadOutline } from 'react-icons/io5';
import axios from 'axios';
import { API_BASE_URL } from '../../../confij.js';
import { toast, Bounce } from 'react-toastify';
import { CONFIG_OBJ } from '../../../confij.js';

function EditProduct({ product, setShowModal, showModal, seteditableproduct, fetchAllProduct }) {
    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [Category, setCategory] = useState('men');

    useEffect(() => {
        if (product) {
            setName(product.name || '');
            setDescription(product.description || '');
            setOldPrice(product.old_price || '');
            setNewPrice(product.new_price || '');
            setCategory(product.category || 'men');
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name: Name,
                description: description,
                old_price: oldPrice,
                new_price: newPrice,
                category: Category
            };

            const response = await axios.put(`${API_BASE_URL}/updateProduct/${product._id}`, data, CONFIG_OBJ);
            if (response.status === 200) {
                fetchAllProduct();
                toast.success(`🦄 ${response.data.message}`, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                    transition: Bounce,
                });
            }

            console.log('API Response:', response.data);
        } catch (error) {
            console.error('API Error:', error);
            toast.error(`🦄 ${error.response.data.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        } finally {
            resetForm();
        }
    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setOldPrice('');
        setNewPrice('');
        setCategory('men');
        setShowModal(false);
    };

    return (
        <>
            <Modal show={showModal} onHide={() => { setShowModal(false); seteditableproduct({}) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="addProductName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="addProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="About the product"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="addProductOldPrice">
                                <Form.Label>Old Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="69"
                                    value={oldPrice}
                                    onChange={(e) => setOldPrice(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="addProductNewPrice">
                                <Form.Label>New Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="99"
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="addProductCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    value={Category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="kid">Kid</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label htmlFor="fileInput" className="p-2 border border-1">
                                    {product.image &&
                                        <img
                                            src={`${API_BASE_URL}/images/${product.image}`}
                                            width="300px"
                                            height="200px"
                                            alt="previewimage"
                                        />
                                    }
                                </Form.Label>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit" className="mb-5">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditProduct;
