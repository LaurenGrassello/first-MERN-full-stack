import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>setProduct(res.data))
            .catch(err => console.log("Something went wrong", err))
    }, [refresh])

    const reload = () =>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <ProductForm reload={reload} />
            {product && <ProductList reload={reload} product={product} />}
        </div>
    )
}

export default Main;