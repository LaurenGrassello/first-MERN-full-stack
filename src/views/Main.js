import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{
            setProduct(res.data) 
            setLoaded(true);
        })
    }, [])

    const removeFromDom = id => {
        setProduct(product.filter(product => product._id !== id))
    }

    const createProduct = p => {
        axios.post('http://localhost:8000/api/product', p)
        .then(res=>{
            setProduct([...product, res.data])
        })
    }

    return (
        <div>

            <ProductForm  handleSubmitProp = {createProduct} 
            initialTitle=" " initialPrice=" " initialDescription=" " />
    
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
            
        </div>
    )
}

export default Main;