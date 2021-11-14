import React from 'react'
import Subtotal from './Subtotal'
import BasketItem from './BasketItem'
import './Checkout.css'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title">
                        Your Amazon Cart
                    </h2>
                    {basket.map(item=>(
                        <BasketItem
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            reviews = {item.reviews}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
