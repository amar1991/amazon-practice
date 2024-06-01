import React from 'react';
import "./Product.css";
import {useStateValue} from './StateProvider'


function Product({id, title, image, price, rating}) {

    const[{basket},dispatch] = useStateValue();
    //dispatch the action
    const addToBasket = () => {
        //ADD ITEM TO BASKET
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                //key, value
                id:id,
                title:title,
                image: image,
                price:price,
                rating:rating
            },
        });   
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>     
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        //array of 5
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>🌔</p>
                        )                    
                        )
                    }
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick = {addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
