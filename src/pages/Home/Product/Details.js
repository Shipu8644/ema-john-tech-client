import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const id = useParams();
    console.log(id);
    return (
        <div>
            <h1>Hello From details</h1>
        </div>
    );
};

export default Details;