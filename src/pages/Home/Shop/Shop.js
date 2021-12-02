import React, { useEffect, useState } from 'react';
import { Col as div, Container, Row as Div } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useCart();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container className="mt-5">
            <div style={{ order: 2 }} className='shop'>
                <div >
                    <div className='product'>
                        {products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)}
                    </div>
                </div>
                <div style={{ order: 1 }} className='cart'>
                    <Cart></Cart>
                </div>
            </div>
        </Container>
    );
};

export default Shop;