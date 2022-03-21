import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const ProductList = () => {
    const [lists, setLists] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product`)
            .then(res => setLists(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="productList">
            <h3>All Products:</h3> 
            {
                lists ? (
                <>
                    <table>
                    <thead>
                    <tr>
                    <td>Title:</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        lists.map((list, i)=>(
                            <tr key={i}>
                            <td>
                            <Link to={`/product/${list._id}`}>{list.title}</Link>
                            </td>
                            </tr>
                        ))
                    }
                    </tbody>
                    </table>
                    </>
                ): 
                <>
                <h3>There was an error</h3>
                </>
                }
        </div>
    )
}

export default ProductList;
