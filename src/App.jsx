import React, { useEffect } from 'react'

function App (props) {
  const token = "799b32e1b953bef60bafc08cd74be9eba6ec892c";
  const query = "москва хабар";
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
  }

  useEffect(() => {
    fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })
  return (
    <div></div>
  )
}

export default App