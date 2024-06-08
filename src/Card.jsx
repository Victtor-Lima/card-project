import React from 'react';
import CartButton from './CartButton';
import './Card.css';
import BtnFavorite from './BtnFavorite';

const Card = ({ product, cart, setCart, favorite }) => {

  return (
    <div className='container'>
      <BtnFavorite addToFavorites={[product, favorite, 'favorites']}/>
      <img className='img-product' src={product.img} alt={product.description} />
      <h1 className='title'>{product.name}</h1>
      <ul className='list-charact'>
        {product.charact.map((text) => (
          <li key={`charac${text}`}>{text}</li>
        ))}
      </ul>
      <p className='description'>{product.description}</p>
      <div className='styling-div-card-priceFunc'>
        <span className='price'>${product.price}</span>
        <CartButton addToCart={{product, cart, setCart, nameList: 'cart'}} />
      </div>
    </div>
  )
}

export default Card;