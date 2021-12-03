import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useCart from '../../../hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Header from '../../Header/Header';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    const handleAddToCart = (product, check) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];

        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }



        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const searchHandler = searchText => {
        setSearchTerm(searchText);
        // console.log(searchTerm);
        const matchedProducts = products.filter(product => product.category.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts);
        setDisplayProducts(matchedProducts);
    }
    return (
        <Container className="mt-5">
            <Header
                term={searchTerm}
                searchHandler={searchHandler}
            ></Header>
            <div style={{ order: 2 }} className='shop'>
                <div >
                    {displayProducts.length ? <div className='product'>
                        {displayProducts.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)}
                    </div> :
                        <Spinner animation="border" />
                    }
                </div>
                <div style={{ order: 1 }} className='cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </Container>
    );
};

export default Shop;