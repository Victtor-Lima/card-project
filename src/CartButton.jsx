import React from 'react';
import { handleClick } from './handleClickFunc';

const CartButton = ({ addToCart }) => {
  const arrParamCart = Object.values(addToCart);

  return (
    <button onClick={() => handleClick(arrParamCart)} className='btn-addToCart'>Add to Cart</button>
  )
}

export default CartButton;