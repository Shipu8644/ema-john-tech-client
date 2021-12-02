import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    console.log(product);

    return (
        <div>
            <h1>Hello From details {product.name}</h1>
        </div>
    );
};

export default Details;