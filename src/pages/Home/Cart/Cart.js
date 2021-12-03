import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-style'>
            <h5 style={{ color: "red" }}>Hello there, If you added more than one items, You will get 20% discount</h5>
            <div>
                <h3>Order Summary</h3>
                <h5>Items Ordered: {totalQuantity}</h5>
                <br />
                <p>Total: ${total.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p>tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
                <br />
                {totalQuantity > 1 && <p>Your total: ${(grandTotal.toFixed(2) - grandTotal.toFixed(2) * (20 / 100)).toFixed(2)} [After Discount]</p>}
            </div>
        </div>
    );
};

export default Cart;