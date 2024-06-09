import React from 'react';
import { handleAddToCart } from './handleAddToCart';
import './ButtonCart.css';

const ButtonCart = ({ addToCart }) => {
  const arrParamCart = [
    addToCart[0], 
    addToCart[1][0], 
    addToCart[1][1], 
    addToCart[2]
  ]

  return (
    <button onClick={() => handleAddToCart(arrParamCart)} className='button-cart'>Add to Cart</button>
  )
}

export default ButtonCart;