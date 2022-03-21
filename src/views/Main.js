import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data.product))
            .catch(err => console.log("Something went wrong", err))
    }, [])

    return (
        <div>
            <ProductForm />
            <ProductList product={product} />
        </div>
    )
}

export default Main;