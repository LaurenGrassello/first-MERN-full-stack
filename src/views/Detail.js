import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const { removeProduct } = props
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                history.push('/');
                removeProduct(id);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='productView'>
            {
                product ? (
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

                        <button className='deleteBtn'
                            onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                        |
                        <Link to={`/product/${id}/edit`}>Edit</Link>
                        |
                        <Link to={`/`}>Home</Link>
                    </>
                ) : (

                    <h3>There was an error</h3>
                )


            }
        </div>
    )
}

export default Detail;