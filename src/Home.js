import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product 
                title='Dune - By Frank Herbert'
                price='19'
                image='https://images-na.ssl-images-amazon.com/images/I/91JV0+3BRGL._AC_UL254_SR254,254_.jpg' rating={3}
                reviews='37,755'
                id='123' />
                <Product 
                title='Razer Kraken X Ultralight Gaming Headset'
                price='35.99'
                image='https://m.media-amazon.com/images/I/51q7Td1wWUL._AC_UY327_FMwebp_QL65_.jpg' rating={4}
                reviews='1,394'
                id='1234' />
                <Product 
                title='Hbada Gaming Chair Ergonomic Racing Chair'
                price='169.99'
                image='https://m.media-amazon.com/images/I/71IC-JS4p1L._AC_UL480_FMwebp_QL65_.jpg' rating={4}
                reviews='6,547'
                id='12344' />
            </div>

            <div className="home__row">
                <Product 
                title='2020 Apple MacBook Air Laptop'
                price='870.22'
                image='https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UL480_QL65_.jpg' rating={5}
                reviews='10,476'
                id='127' />
                <Product 
                title='Logitech MK270 Wireless Keyboard and Mouse Combo'
                price='19.90'
                image='https://m.media-amazon.com/images/I/61v+taI5jvL._AC_UL480_QL65_.jpg' rating={4}
                reviews='54,998'
                id='1235' />
                <Product 
                title='Original HP 67 Black/Tri-color Ink Cartridges (2-pack)'
                price='29.99'
                image='https://m.media-amazon.com/images/I/71ic26eWeLL._AC_UL480_QL65_.jpg' rating={4}
                reviews='12,416'
                id='126' />
            </div>

            <div className="home__row">
                <Product 
                title='Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)'
                price='399.99'
                image='https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_UY327_FMwebp_QL65_.jpg' rating={4}
                reviews='105'
                id='1261' />
                <Product 
                title='SAMSUNG Galaxy Watch Active 2'
                price='99'
                image='https://m.media-amazon.com/images/I/51bSW9gjoaL._AC_UL480_FMwebp_QL65_.jpg' rating={4}
                reviews='8952'
                id='9076' />
            </div>
        </div>
    )
}

export default Home
