import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'


const ProductList = (props) => {

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                props.reload()
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="productList">
            <h3>All Products</h3>
            {
                props.product ? (
                    <>
                        <table>
                            <tbody>
                                {
                                    props.product.map((list, i) => (
                                        <tr key={i}>
                                            <td>
                                                <Link className='linkItem' to={`/product/${list._id}`}>{list.title}</Link>
                                            </td>
                                            <td><button className='deleteBtn' onClick={(e) => { deleteProduct(list._id) }}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                ) :
                    <>
                        <h3>There was an error</h3>
                    </>
            }
        </div>
    )
}

export default ProductList;
