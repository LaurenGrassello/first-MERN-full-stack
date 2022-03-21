import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id]);

    return (
        <div className='productView'>
    {
        product ?(
        <>
        <table className="table" >
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <tr>{product.title}</tr>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Price</th>
                    <td>{product.price}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>{product.description}</td>

                </tr>

            </tbody>
            </table >
            </>
            ):(

                <h3>There was an error</h3>
            )

        
}
        </div>
    )
}

export default Detail;