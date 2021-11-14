import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider'

function BasketItem({id, image, title, price, rating, reviews}) {
    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct' id={id}>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div           className='product__rating'>
                    {
                        Array(rating).fill().map(()=>(
                            <p>🌟</p>
                        ))
                    }
                    <p>{reviews}</p>
                </div>  
                <button onClick={removeFromBasket}  className='remove__button'>Remove from Basket</button>   
            </div>
        </div>
    )
}

export default BasketItem
