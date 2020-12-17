import React from 'react';
import '../Style/CheckoutProduct.scss';

import {useDispatch} from 'react-redux';

function CheckoutProduct(props) {
    const {title, rating , price , image , id } = props;

    const dispatch = useDispatch()
    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' alt=''/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__info__title'>{title}</p>
                <p className='checkoutProduct__info__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className='checkoutProduct__info__rating'>
            {Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={() => dispatch({type: 'REMOVE_FROM_CART' , id: id , price: price})}className='checkoutProduct__info__button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
