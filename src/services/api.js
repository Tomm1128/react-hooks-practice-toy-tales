const api = " http://localhost:3001/toys/"

const getToys = () => {
  return fetch(api).then((resp) => resp.json())
}

const createToy = (newToy) => {
  return fetch(api, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newToy),
  }).then((resp) => resp.json())
}

const deleteToy = (id) => {
  return fetch(api + id, {
    method: "Delete",
  })
}

export { getToys, createToy, deleteToy }
