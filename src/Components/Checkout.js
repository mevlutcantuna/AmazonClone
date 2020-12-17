import React from 'react';
import '../Style/Checkout.scss';

import {useSelector} from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const basket = useSelector(state => state.basket)

    return (
        <div className='checkout'>

            <div className='checkout__left'>
            <img 
                className='checkout__left__ad'
                src='https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/GCLPBanners/holi_d_slideshow_GCLP_EN_1024x180_v2_20200918.jpg' 
                alt='#'/>
            {basket.length === 0 ? (
                <div>
                    <h1>Your Shopping Basket is Empty</h1>
                    <p>You have no items in your basket.To buy one or more items,click "Add to basket" next to the item.</p>
                </div>
            ):(
                <div>
                    <hr/>
                    <h1>Your Shopping Basket</h1>
                    {basket.map((item) => (
                        <CheckoutProduct
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            )}
            </div>

            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
