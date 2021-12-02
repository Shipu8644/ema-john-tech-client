
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, seller, price, stock, category, _id,
        starCount } = product;

    return (
        <Container className="mt-5 ">
            <Row md={2} >
                <Col>
                    {img?.startsWith('/9') ?
                        <img src={`data:image/png;base64,${img}`} alt="" /> :

                        <img src={img} alt="" />
                    }

                    <br />

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
                        <Button>Update this product</Button>

                        <Link style={{ textDecoration: 'none' }} to='/home'> <Button className="ms-5"> All Products</Button></Link>

                    </div>


                </Col>
            </Row>
        </Container>
    );
};

export default Details;