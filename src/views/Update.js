import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Link, useHistory} from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
    }, [id])

    const updateProduct =(e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then(res=>{
            history.push('/')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
        <h3>Update Product</h3>
        <form onSubmit={updateProduct}>
        <label>Title</label>
        <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <label>Price</label>
        <input type='text' name='price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        <label>Description</label>
        <input type='text' name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        <input type='submit' />
        </form>
        <Link to={`/`}>Home</Link>
        </div>
    )
}

export default Update