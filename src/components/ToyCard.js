import React from "react"
import { deleteToy } from "../services/api"

function ToyCard({ toy: { id, name, image, likes }, onDelete }) {
  const handleDelete = () => {
    deleteToy(id).then(() => onDelete(id))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
