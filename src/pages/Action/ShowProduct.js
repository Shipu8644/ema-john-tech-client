import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { MdAutoDelete } from "react-icons/md";
const ShowProduct = ({ product, handleProductDelete }) => {
    const { img, price, star, category, _id } = product;
    return (
        <div className="single-product">
            <h3 onClick={() => handleProductDelete(product._id)} title='delete' style={{ cursor: 'pointer', textAlign: 'right', color: 'red' }}> <MdAutoDelete /></h3>
            {img?.startsWith('/9') ?
                <img src={`data:image/png;base64,${img}`} alt="" /> :

                <img src={img} alt="" />
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
            <Link to={`/update-product/${_id}`}> <Button className="mb-2 mt-2">Update Product</Button></Link>
            <br />

        </div>

    );
};

export default ShowProduct;