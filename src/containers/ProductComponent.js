import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { productReducer } from '../redux/reducers/productReducer';

const ProductComponent = () =>{
    const products = useSelector(state => state.allProducts.products);

    const {id,title}= products[0];
    console.log(products);
    console.log(title);

    const renderList = products.map((product)=>{
        return(
        <Link to={`/product/${product.id}`}>
            <div className="container four wide column" key={product.id}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className="content">
                        <div className="header">{product.title}</div>
                        <div className="meta price"> $ {product.price}</div>
                        <div className="meta"> $ {product.category}</div>
                    </div>
                </div>
            </div>
            </div>
        </Link>)
    })
    return(

    <>{renderList}</>
    ); 
}

export default ProductComponent;