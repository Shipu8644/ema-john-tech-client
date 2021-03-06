import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const Product = ({ product, handleAddToCart, handleRemoveFromCart }) => {
    const { img, price, star, category, _id } = product;


    return (

        <div className="single-product">
            {img?.startsWith('/9') ?
                <img className="img-fluid" src={`data:image/png;base64,${img}`} alt="" /> :

                <img className="img-fluid" src={img} alt="" />
            }


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
            <Link to={`/view-product/${_id}`}> <Button className="mb-2 mt-2">View Product</Button></Link>
            <br />
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            <br />

        </div>


    );
};

export default Product;