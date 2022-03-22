import React, { useState } from "react";

const ProductForm = (props) => {
    const {
        initialTitle, 
        initialPrice, 
        initialDescription,
        handleSubmitProp
    } = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle('')
        setPrice('')
        setDescription('')
        handleSubmitProp({title, price, description})
    }

    return (
        <form className="productForm" onSubmit={handleSubmit}>
        <h3>Product Manager</h3>
            <p>
                <label className="form-label">Title: </label>
                <input type='text' name='title' value={title} 
                onChange={(e) => {setTitle(e.target.value)}} />
            </p>
            <p>
                <label>Price: </label>
                <input type='text' name='price' value={price} 
                onChange={(e)=> {setPrice(e.target.value)}} />
            </p>
            <p>
                <label className="desc">Description: </label>
                <input type='text' name='description' value={description} 
                onChange={(e) => {setDescription(e.target.value)}} />
            </p>
            <input className="btn btn-dark" type='submit' />
        </form>
    )
}

export default ProductForm;