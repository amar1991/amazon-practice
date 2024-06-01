import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //remove item from basket by passing id
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        });
    }



    return (
        //view it in this way at checkout page
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
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
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
