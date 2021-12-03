import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';

const UpdateProduct = () => {
    const { id } = useParams();
    const [products] = useProducts();
    return (
        <div>

        </div>
    );
};

export default UpdateProduct;