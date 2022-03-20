import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log('Response', res))
            .catch(err => console.log('Error', err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label>
                <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label>
                <input type='text' onChange={e => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Descirption</label>
                <input type='text' onChange={e => setDescription(e.target.value)} value={description} />
            </p>
            <input type='submit' />
        </form>
    )
}