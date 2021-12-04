import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../hooks/useProducts';
import Header from '../Header/Header';
import ShowProduct from './ShowProduct'

const Action = () => {
    const [products] = useProducts();
    const [displayProducts, setDisplayProducts] = useProducts();
    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = searchTerm => {
        setSearchTerm(searchTerm);
        const matchedProducts = products.filter(product => product.category.toLowerCase().includes(searchTerm.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    const handleProductDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://murmuring-badlands-98930.herokuapp.com/products/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! This Product has been deleted!", {
                                    icon: "success",
                                });
                                const remainingProducts = displayProducts.filter(product => product._id !== id);
                                setDisplayProducts(remainingProducts);
                            }
                        })

                } else {
                    swal("This Product is safe!");
                }
            });

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