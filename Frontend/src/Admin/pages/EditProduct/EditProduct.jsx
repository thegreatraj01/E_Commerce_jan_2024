import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from 'axios';
import { API_BASE_URL } from '../../confij';
import { toast, Bounce } from 'react-toastify';


function EditProduct() {
    const [Name, setName] = useState("");
    const [discription, setDiscription] = useState("")
    const [oldPrice, setOldPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [Category, setCategory] = useState("men");
    const [image, setImage] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append('name', Name);
            data.append('description', discription);
            data.append('old_price', oldPrice);
            data.append('new_price', newPrice);
            data.append('category', Category);

            // Check if an image is selected
            if (image) {
                data.append('product', image);
            }
            const response = await axios.post(`${API_BASE_URL}/addproduct`, data);
            if (response.status === 201) {
                toast.success(`🦄 ${response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            // Handle the response as needed
            console.log('API Response:', response.data);

        } catch (error) {
            // Handle errors
            console.error('API Error:', error);
            toast.error(`🦄 ${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setName("");
            setDiscription("");
            setOldPrice('');
            setNewPrice('');
            setImage(false);
            setCategory("man");
        }
    };

    return (
        <Layout>
            <div className='m-0 mx-5 px-2'>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="addproductname">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" required value={Name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="addproductdiscription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="About the product"
                            required
                            value={discription} onChange={(e) => setDiscription(e.target.value)}
                        />
                    </Form.Group>
                    <Row className='mb-3'>
                        <Form.Group as={Col} className="mb-3" controlId="addproductoldprice">
                            <Form.Label>Old Price</Form.Label>
                            <Form.Control type='number' placeholder="69" required value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="addproductolnewprice">
                            <Form.Label>New Price</Form.Label>
                            <Form.Control type='number' placeholder="99" required value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="addproductcategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select required value={Category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kid">Kid</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label htmlFor="fileInput" className=' p-2 border border-1' >
                                {image ? <img src={URL.createObjectURL(image)} width='300px' height={'200px'} alt='previewimage' /> : <> <IoCloudUploadOutline id='imageuploadicon' size={80} /> image  </>}
                            </Form.Label>
                            <Form.Control
                                type="file"
                                className=" d-none"
                                id="fileInput"
                                onChange={(e) => { setImage(e.target.files[0]) }}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className='mb-5'>
                        Submit
                    </Button>
                </Form>
            </div>
        </Layout>
    );
}

export default EditProduct;
