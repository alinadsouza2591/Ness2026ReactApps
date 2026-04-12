import { useState } from 'react'
import Item from './Item'
import EventPatterns from './EventPatterns'
import GroceryStore from './classcomponents/grocerystore'
//import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <GroceryStore />
        <EventPatterns />
      </section>
    </>
  )
}

export default App
