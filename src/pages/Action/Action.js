import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Header from '../Header/Header';
import ShowProduct from './ShowProduct';

const Action = () => {
    const [products] = useProducts();
    const [displayProducts, setDisplayProducts] = useProducts();
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = searchText => {
        setSearchTerm(searchText);
        // console.log(searchTerm);
        const matchedProducts = products.filter(product => product.category.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts);
        setDisplayProducts(matchedProducts);
    }

    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully')
                        const remainingProducts = displayProducts.filter(product => product._id !== id);
                        setDisplayProducts(remainingProducts);
                    }
                })
        }
    }

    return (

        <div >
            <Header
                term={searchTerm}
                searchHandler={searchHandler}
            ></Header>
            <Container className="mb-5">
                <h3 className="mt-5 mb-5">Total products: {displayProducts.length}</h3>
                {displayProducts.length ? <div className='product border-0'>
                    {displayProducts.map(product => <ShowProduct
                        key={product._id}
                        product={product}
                        handleProductDelete={handleProductDelete}
                    ></ShowProduct>)}
                </div> :
                    <Spinner animation="border" />
                }
            </Container>
        </div>

    );
};

export default Action;