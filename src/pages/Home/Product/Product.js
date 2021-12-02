import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Product = ({ product }) => {
    const { name, img, seller, price, stock, star, category
    } = product;
    return (

        <div className="single-product">
            <img src={img} alt="" />
            <h5 style={{ marginTop: '20px' }}>{category}</h5>
            <Rating
                style={{ color: '#DAA520' }}
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly></Rating>
            <br />
            <small>price: <strong>${price}</strong> </small>
            <br />
            <Button className="mb-2 mt-2">View Product</Button>
            <br />
            <Button>Add to Cart</Button>
        </div>


    );
};

export default Product;