import React from 'react'
import CardList from './CardList';
import coffeeOptions from '../coffeeOption.json'

function App() {

  return (
    <>
      <CardList products={coffeeOptions} />
    </>
  )
}

export default App
