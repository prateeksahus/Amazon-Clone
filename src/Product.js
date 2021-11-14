import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating, reviews}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                reviews: reviews,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__title'>{title}</p>
                <div           className='product__rating'>
                    {
                        Array(rating).fill().map(()=>(
                            <p>🌟</p>
                        ))
                    }
                    <p>{reviews}</p>
                </div>            
                <p className='product__price'>
                    <small>$</small><strong>{price}</strong></p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
