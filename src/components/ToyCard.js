import React from "react"
import { deleteToy, updateToy } from "../services/api"

function ToyCard({ toy, onDelete, onUpdate }) {
  const { id, name, image, likes } = toy
  const handleDelete = () => {
    deleteToy(id).then(() => onDelete(id))
  }

  const handleUpdate = () => {
    const updatedToy = {
      ...toy,
      likes: likes + 1,
    }

    updateToy(updatedToy).then(onUpdate)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleUpdate}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
