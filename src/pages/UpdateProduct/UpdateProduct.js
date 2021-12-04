import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import Header from '../Header/Header';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();





    useEffect(() => {
        fetch(`https://murmuring-badlands-98930.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);

    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`https://murmuring-badlands-98930.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // alert("Update Successful");
                    swal({
                        title: "Good job!",
                        text: "You edited the product details!",
                        icon: "success",
                        button: "Done!",
                    });

                }
            })
            .catch(error => {
                console.error('Error:', error);
                swal("Oops", "There is an error!", "error");
            });

    }

    return (
        <Container>
            <Header
                show="show"
            ></Header>
            <h3 className='mt-5 mb-4'>Product name: <span style={{ color: 'red', fontSize: '20px' }}>{product.name}</span></h3>
            <div className='container ms-lg-5 '>
                <h2>Edit Below:</h2>
                <form onSubmit={handleSubmit} className="form-horizontal" >
                    <div className="form-group ms-md-5 mt-5 ">
                        <label className="control-label col-sm-2 me-lg-5 pe-lg-5 " ><strong>Name:</strong></label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="text"
                                className="form-control"

                                defaultValue={product.name}
                                onBlur={handleBlur}
                                name="name" />

                        </div>
                    </div>
                    <div className="form-group ms-lg-5 mt-2">
                        <label className="control-label col-sm-2 me-lg-5 pe-lg-5 "><strong>Category:</strong></label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="text"
                                className="form-control"
                                defaultValue={product.category}
                                onBlur={handleBlur}
                                name="category" />
                        </div>
                    </div>
                    <div className="form-group ms-lg-5 mt-2">
                        <label className="control-label col-sm-2 me-lg-5 pe-lg-5 " ><strong>Price($):</strong></label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="number"
                                className="form-control"
                                defaultValue={product.price}
                                onBlur={handleBlur}
                                name="price" />
                        </div>
                    </div>
                    <div className="form-group ms-lg-5 mt-2">
                        <label className="control-label col-sm-2 me-lg-5 pe-lg-5 "><strong>Brand:</strong></label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="text"
                                className="form-control"
                                defaultValue={product.seller}
                                onBlur={handleBlur}
                                name="seller" />
                        </div>
                    </div>
                    <div className="form-group ms-lg-5 mt-2">
                        <label className="control-label col-sm-2 me-lg-5 pe-lg-5 "><strong>Stock(number)</strong>:</label>
                        <div className="col-sm-10">
                            <input
                                required
                                type="number"
                                className="form-control"
                                defaultValue={product.stock}
                                onBlur={handleBlur}
                                name="stock" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10 ms-lg-5 ps-lg-5">
                            <Button type="submit" className="btn btn-default">Submit</Button>
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