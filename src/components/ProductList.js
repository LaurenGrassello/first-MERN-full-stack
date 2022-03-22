import React from 'react';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';


const ProductList = (props) => {

    return (
        <div className="productList">
            <h3>All Products</h3>
            {props.product.map((product, i) =>{
                return(
                    <p key={i}>
                    <Link to={'/product/' + product._id}>
                    {product.title}
                    </Link>
                    |
                    <Link to={'/product/' + product._id + '/edit'}>
                    Edit
                    </Link>
                    |
                    <DeleteButton productId={product._id} 
                    successCallback={()=>props.removeFromDom(product._id)} />
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList;
