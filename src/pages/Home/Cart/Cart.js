import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div className='cart-style'>
            <div>
                <h3>Order Summary</h3>
                <h5>Items Ordered: </h5>
                <br />
                <p>Total: </p>
                <p>Shipping: </p>
                <p>tax: </p>
                <p>Grand Total: </p>

            </div>
        </div>
    );
};

export default Cart;