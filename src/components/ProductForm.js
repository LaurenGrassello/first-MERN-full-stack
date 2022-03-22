import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const {reload} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/product`, {title, price, description})
            .then(res=> {
                setTitle('')
                setPrice('')
                setDescription('')
                reload()
            })
            .catch(err => console.log('Error', err))
    }

    return (
        <form className="productForm" onSubmit={handleSubmit}>
        <h3>Product Manager</h3>
            <p>
                <label className="form-label">Title: </label>
                <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price: </label>
                <input type='text' onChange={e => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label className="desc">Description: </label>
                <input type='text' onChange={e => setDescription(e.target.value)} value={description} />
            </p>
            <input className="btn btn-dark" type='submit' />
        </form>
    )
}

export default ProductForm;