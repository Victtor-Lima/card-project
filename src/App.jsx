import React, { useState } from 'react'
import Card from './Card'

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
  const [cart, setCart] = useState([]);

  console.log(cart)

  return (
    <>
      {coffeOption.map((item) => (
        <Card key={item.id} product={item} cart={cart} setCart={setCart} />
      ))
      }
    </>
  )
}

export default App
