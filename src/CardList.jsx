import React, { useEffect, useState } from 'react';
import { getLocal } from "./localStorage_funcs";
import Card from './Card';

const CardList = ({ products }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLocal = getLocal('cart');
    if(cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  return (
    <section>
      {products.map((item) => (
        <Card key={item.id} product={item} cart={cart} setCart={setCart} />
      ))}
    </section>
  )
}

export default CardList;