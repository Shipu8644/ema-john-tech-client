import React, { useEffect, useState } from 'react';
import { Form, Button, Container as div, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Header from '../Header/Header';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    // const [products] = useProducts();
    const [success, setSuccess] = useState(false);
    const [updateProduct, setUpdateProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...updateProduct };
        newProduct[field] = value;
        console.log(newProduct);
        setUpdateProduct(newProduct);

    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <h3 className='mt-5 mb-4'>Product name: <span style={{ color: 'red', fontSize: '20px' }}>{product.name}</span></h3>
            <div className='container ms-lg-5 '>
                <h2>Edit Below:</h2>
                <form onSubmit={handleSubmit} class="form-horizontal" >
                    <div class="form-group ms-md-5 mt-5 ">
                        <label class="control-label col-sm-2 me-lg-5 pe-lg-5 " for="email"><strong>Name:</strong></label>
                        <div class="col-sm-10">
                            <input
                                required
                                type="text"
                                class="form-control"

                                defaultValue={product.name}
                                onBlur={handleBlur}
                                name="name" />

                        </div>
                    </div>
                    <div class="form-group ms-lg-5 mt-2">
                        <label class="control-label col-sm-2 me-lg-5 pe-lg-5 " for="pwd"><strong>Category:</strong></label>
                        <div class="col-sm-10">
                            <input
                                required
                                type="text"
                                class="form-control"
                                defaultValue={product.category}
                                onBlur={handleBlur}
                                name="category" />
                        </div>
                    </div>
                    <div class="form-group ms-lg-5 mt-2">
                        <label class="control-label col-sm-2 me-lg-5 pe-lg-5 " for="pwd"><strong>Price($):</strong></label>
                        <div class="col-sm-10">
                            <input
                                required
                                type="number"
                                class="form-control"
                                defaultValue={product.price}
                                onBlur={handleBlur}
                                name="price" />
                        </div>
                    </div>
                    <div class="form-group ms-lg-5 mt-2">
                        <label class="control-label col-sm-2 me-lg-5 pe-lg-5 " for="pwd"><strong>Brand:</strong></label>
                        <div class="col-sm-10">
                            <input
                                required
                                type="text"
                                class="form-control"
                                defaultValue={product.seller}
                                onBlur={handleBlur}
                                name="seller" />
                        </div>
                    </div>
                    <div class="form-group ms-lg-5 mt-2">
                        <label class="control-label col-sm-2 me-lg-5 pe-lg-5 " for="pwd"><strong>Stock(number)</strong>:</label>
                        <div class="col-sm-10">
                            <input
                                required
                                type="number"
                                class="form-control"
                                defaultValue={product.stock}
                                onBlur={handleBlur}
                                name="stock" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10 ms-lg-5 ps-lg-5">
                            <Button type="submit" class="btn btn-default">Submit</Button>
                            <br />

                            <br />
                            <Link style={{ textDecoration: 'none' }} to={`/view-product/${product._id}`}>   <Button>Back to Details</Button></Link>
                        </div>
                    </div>

                </form>
            </div>
        </Container>

    );
};

export default UpdateProduct;