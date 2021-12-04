import React, { useState } from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';


const Cart = ({ cart }) => {
    const [state, setState] = useState(false);

    const handleAlert = () => {
        setState(true);
        if (state && totalQuantity > 1) {
            swal({
                title: "Congrats!",
                text: "You will get 20% discount!",
                icon: "success",
                button: "Ok!",
            });
        }
        else if (state && totalQuantity > 0 && totalQuantity < 2) {
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
            <h5 className=" text-danger">
                Hello there, if you added more than one items, you can get 20% discount
            </h5>
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

            <Button onClick={handleAlert}>Order</Button>


        </div >
    );
};

export default Cart;