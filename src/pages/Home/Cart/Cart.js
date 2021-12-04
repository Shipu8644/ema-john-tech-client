import React, { useState } from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';


const Cart = ({ cart }) => {

    const handleAlert = () => {

        if (totalQuantity > 1) {
            swal({
                title: "Congrats!",
                text: "You will get 20% discount!",
                icon: "success",
                button: "Ok!",
            });
        }
        else if (totalQuantity > 0 && totalQuantity < 2) {
            swal("Thanks you for purchasing from here!");
        }
        else {
            swal("Please Order Something!");
        }
    }
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
        <div data-aos="zoom-in-up" className='cart-style '>
            <h5 className=" text-danger" style={{ fontFamily: 'monospace' }}>
                Hello there, if you added more than one items, you can get 20% discount
            </h5>
            <div>
                <h4>Order Summary</h4>
                <h5>Items Ordered: {totalQuantity}</h5>

                <p>Total: ${total.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p>tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: <strong> ${grandTotal.toFixed(2)}</strong></p>
                {totalQuantity > 1 && <h6><span className="text-danger">Your Total:</span> <strong>${(grandTotal.toFixed(2) - grandTotal.toFixed(2) * (20 / 100)).toFixed(2)}</strong> <span className="text-success">[After Discount]</span></h6>}
                <Button onClick={handleAlert}>Order</Button>
            </div>



        </div >
    );
};

export default Cart;