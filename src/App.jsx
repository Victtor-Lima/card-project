import React from 'react'
import CardList from './CardList';
import coffeOptions from '../coffeOption.json'

function App() {

  return (
    <>
      <CardList products={coffeOptions} />
    </>
  )
}

export default App
