const api = " http://localhost:3001/toys/"

const getToys = () => {
  return fetch(api).then((resp) => resp.json())
}

export { getToys }
