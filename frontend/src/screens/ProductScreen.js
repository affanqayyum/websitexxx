import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            <Link to='/'>Go back to Home</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} ></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} number of views {product.numReviews}
                    </li>
                    <li>
                       price: <b> {product.price}$ </b>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty:<select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                    <li>
                        <button className= "button">Add to cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;