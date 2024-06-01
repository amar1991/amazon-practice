import React from 'react' 
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import CurrencyFormat from 'react-currency-format'

import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal';

function Checkout() {
    //GET the basket
    //Whever you want to remove use dispatch
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad"                
                src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
                alt=""
            >
            </img>
            {/*if the basket is empty then show me this stuff */}
            {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket?.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                )}     
              
            </div>
            
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <SubTotal></SubTotal>
                </div>
            )}

            
        </div>
    )
}

export default Checkout
