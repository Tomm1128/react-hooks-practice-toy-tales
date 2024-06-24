const api = " http://localhost:3001/toys/"

const getToys = () => {
  return fetch(api).then((resp) => resp.json())
}

const createToy = (toy) => {
  return fetch(api, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toy),
  }).then((resp) => resp.json())
}

export { getToys, createToy }
