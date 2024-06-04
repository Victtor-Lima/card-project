import React, { useState } from 'react'
import Card from './Card'
import CardList from './CardList';

const coffeOption = [
  {
    img: "../img/img_capuccino.jpg",
    name: 'Capuccino',
    price: 10,
    charact: ['Espresso', 'Milk', 'Classic'],
    description: 'The traditional preparation involves pouring a shot of espresso into a cup, then adding steamed milk, and topping it with a layer of foamed milk.',
    id: 'optionCapuccino' 
  }
]

function App() {

  return (
    <>
      <CardList products={coffeOption} />
    </>
  )
}

export default App
