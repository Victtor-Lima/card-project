import React, { useState } from 'react';
import Card from './Card';

const CardList = ({ products }) => {
  const [cart, setCart] = useState([]);

  console.log(cart)
  return (
    <section>
      {products.map((item) => (
        <Card key={item.id} product={item} cart={cart} setCart={setCart} />
      ))}
    </section>
  )
}

export default CardList;