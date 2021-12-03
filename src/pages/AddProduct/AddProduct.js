import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../Header/Header';

const AddProduct = () => {
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = e => {

        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('key', Math.random().toString(36).substring(2, 12));
        formData.append('category', category);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('star', 4.5);
        formData.append('stock', 15);
        formData.append('seller', "Brand Name");
        formData.append('starCount', 2000);
        formData.append('name', "Product naming is the discipline of deciding what a product will be called, and is very similar in concept");



        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Product added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.preventDefault();

    }

    return (
        <div>
            <Header></Header>
            <h3 className='mt-5 mb-4'>Add A Product</h3>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formGridName">
                        <Form.Control
                            required
                            style={{ width: '90%' }}
                            type="text"
                            onChange={e => setCategory(e.target.value)}
                            placeholder="Enter Product Category"
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formGridEmail">

                        <Form.Control
                            required
                            style={{ width: '90%' }}
                            type="number"
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Enter the Price"
                        />
                    </Form.Group>
                    <br />
                    <div className='d-flex flex-row'>
                        <p className="me-2">Product image:</p>
                        <input
                            required
                            accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </div>
                    <br />
                    {success && <p style={{ color: 'red' }}>{success}</p>}
                    <Button type="submit" className="w-75">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;