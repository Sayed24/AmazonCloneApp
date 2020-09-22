import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function ChecktProduct({ id, image, title, price, rating }) {
    const [{ basket }, disatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        disatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })   
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="CheckoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default ChecktProduct;
