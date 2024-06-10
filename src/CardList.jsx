import React, { useEffect, useState } from 'react';
import { getLocal } from "./utilityFunctions/localStorage_funcs";
import Card from './components/Card';
import './CardList.css';

const CardList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const cartLocal = getLocal('cart');
    if(cartLocal) {
      setCart(cartLocal);
    }
  }, []);

  useEffect(() => {
    const favoriteLocal = getLocal('favorites');
    if(favoriteLocal) {
      setFavorite(favoriteLocal);
    }
  }, []);
  
  return (
    <section className='cardList-container'>
      {products.map((item) => (
        <Card 
          key={item.id} 
          product={item} 
          arrCart={[cart, setCart]} 
          arrFavorite={[favorite, setFavorite]}/>
      ))}
    </section>
  )
}

export default CardList;