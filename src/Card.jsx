import React from 'react';
import ButtonCart from './ButtonCart';
import ButtonFavorite from './ButtonFavorite';
import './Card.css';

const Card = ({ product, arrCart, arrFavorite }) => {

  return (
    <div className='container'>
      <ButtonFavorite addToFavorites={[product, arrFavorite, 'favorites']}/>
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
        <ButtonCart addToCart={[product, arrCart, 'card']} />
      </div>
    </div>
  )
}

export default Card;