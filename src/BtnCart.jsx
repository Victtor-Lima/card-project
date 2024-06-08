import React from 'react';
import { handleAddToCart } from './handleAddToCart';

const BtnCart = ({ addToCart }) => {
  const arrParamCart = [
    addToCart[0], 
    addToCart[1][0], 
    addToCart[1][1], 
    addToCart[2]
  ]

  return (
    <button onClick={() => handleAddToCart(arrParamCart)} className='btn-cart'>Add to Cart</button>
  )
}

export default BtnCart;