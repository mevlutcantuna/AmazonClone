import React from 'react'
import '../Style/Subtotal.scss';

import {useSelector} from 'react-redux';

function Subtotal() {

    const basket = useSelector(state => state.basket)
    const totalprice = useSelector(state => state.totalPrice)

    const price = totalprice.toFixed(2)

    return (
        <div className='subtotal'>
            <p>{`Subtotal (${basket.length} items):`} <strong>${`${price}`}</strong></p>
            <p><input type='checkbox'/> This order contains a gift. </p>
            <button className='subtotal__button'>Procced to Checkout</button>
        </div>
    )
}
 
export default Subtotal
