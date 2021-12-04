
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';


const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`https://murmuring-badlands-98930.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, seller, price, stock, category, _id,
        starCount } = product;

    return (
        <Container className="mt-5 ">
            <Header
                show="show"
            ></Header>
            {Object.keys(product).length === 0 ?

                <Spinner animation="border" /> :

                <Row md={2} xs={1} >
                    <Col>
                        <div className='mb-3'>
                            {img?.startsWith('/9') ?
                                <img style={{ width: '300px' }} className="img-fluid" src={`data:image/png;base64,${img}`} alt="" /> :

                                <img style={{ width: '300px' }} className="img-fluid" src={img} alt="" />
                            }
                        </div>

                        <h5>{category}</h5>

                    </Col>
                    <Col style={{ textAlign: 'left' }} >
                        <h5 style={{ color: 'blue' }}>{name}</h5>
                        <p>Price: $<strong style={{ color: 'red' }}>{price}</strong></p>
                        <p>viewed by {starCount} people</p>
                        <p>Brand: {seller}</p>
                        <p>Stock: {stock} left</p>
                        <hr />
                        <div className="d-flex flex-row m-2 ">
                            <Link style={{ textDecoration: 'none' }} to={`/update-product/${_id}`}> <Button>Update this product</Button></Link>

                            <Link style={{ textDecoration: 'none' }} to='/home'> <Button className="ms-5"> All Products</Button></Link>

                        </div>


                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Details;