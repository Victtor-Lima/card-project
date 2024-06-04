import React from 'react';

const CartButton = ({ activeFunc, product }) => {
  
  return (
    <button onClick={() => activeFunc(product)} className='btn-addToCart'>Add to Cart</button>
  )
}

export default CartButton;