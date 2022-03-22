import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'

const Update = (props) => {
    const history = useHistory()
    const {id} = useParams()
    const [loaded, setLoaded] = useState(false)
    const [product, setProduct] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res=>{
            setProduct(res.data)
            setLoaded(true)
        })
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
        .then(res=>console.log(res))
        history.push('/')
        // .catch(err=>console.log(err))
    }

    return (
        <div>
        {loaded && (
            <>

            <ProductForm 
            handleSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description} />

            <DeleteButton productId={product._id} 
            successCallback={()=> history.push('/')} />
            <Link to="/">Home</Link>
            </>
        )}
        </div>
    )
}

export default Update;