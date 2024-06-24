import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, removeToy }) {
  const toyCards = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDelete={removeToy} />
  })

  return <div id="toy-collection">{toyCards}</div>
}

export default ToyContainer
