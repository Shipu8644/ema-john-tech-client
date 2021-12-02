
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, seller, price, stock, star, category, _id,
        starCount } = product;

    return (
        <Container className="mt-5 ">
            <Row md={2} >
                <Col>
                    <img style={{ width: '350px' }} src={img} alt="" />
                    <br />
                    <br />
                    <h5>{category}</h5>

                </Col>
                <Col style={{ textAlign: 'left' }} >
                    <h5 style={{ color: 'blue' }}>{name}</h5>
                    <p>Price: $<strong style={{ color: 'red' }}>{price}</strong></p>
                    <p>viewd by {starCount} people</p>
                    <p>Seller: {seller}</p>
                    <p>Stock: {stock} left</p>
                    <hr />
                    <div className="m-2 p-2">
                        <Button>Update this product</Button>
                        <Button className="ms-5">Remove this product</Button>

                    </div>
                    <br />
                    <Button className="m-4 p-2">View All Products</Button>

                </Col>
            </Row>
        </Container>
    );
};

export default Details;