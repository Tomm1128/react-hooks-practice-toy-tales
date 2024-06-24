import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, removeToy, updateToy }) {
  const toyCards = toys.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        onDelete={removeToy}
        onUpdate={updateToy}
      />
    )
  })

  return <div id="toy-collection">{toyCards}</div>
}

export default ToyContainer
