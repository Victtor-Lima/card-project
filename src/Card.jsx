import React from 'react';
import CartButton from './CartButton';
import './Card.css'

function alterarArray(array, obj) {
  return array.map((item) => {
    if(item.id === obj.id) { 
      item.amount += 1;
    }
    return item;
  })
}

const Card = ({ product, cart, setCart}) => {

  function handleClick(value) {
    const item = cart.find((item) => item.id === value.id);
    if(!item) {
      value.amount = 1;
      setCart([...cart, value]);
    } else {
      const newArray = alterarArray(cart, value);
      setCart(newArray);
    }
  } 

  return (
    <div className='container'>
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
        <CartButton activeFunc={handleClick} product={product}/>
      </div>
    </div>
  )
}

export default Card;