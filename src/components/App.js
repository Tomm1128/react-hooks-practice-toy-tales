import React, { useState, useEffect } from "react"

import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"
import { getToys } from "../services/api"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState(null)

  useEffect(() => {
    getToys().then((toysList) => setToys(toysList))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm)
  }

  const updateToyCards = (newToy) => {
    setToys([...toys, newToy])
  }

  const removeToy = (id) => {
    const newToyList = toys.filter((toy) => toy.id !== id)
    setToys(newToyList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToyCards={updateToyCards} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toys ? (
        <ToyContainer toys={toys} removeToy={removeToy} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default App
