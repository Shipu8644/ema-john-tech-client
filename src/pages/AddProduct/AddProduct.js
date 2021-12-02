import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Header from '../Header/Header';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    console.log(name, email)

    const handleSubmit = e => {
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://still-fortress-16838.herokuapp.com/doctors', {
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
                            style={{ width: '100%' }}
                            type="text"
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter Product Category"
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formGridEmail">

                        <Form.Control
                            style={{ width: '100%' }}
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter the Price"
                        />
                    </Form.Group>
                    <br />
                    <div className='d-flex flex-row'>
                        <p className="p-1 me-2">Product image:</p>
                        <input
                            accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </div>
                    <br />

                    <Button type="submit" className="w-75">Submit</Button>

                </Form>
            </div>
        </div>
    );
};

export default AddDoctor;