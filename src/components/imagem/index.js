import React from 'react'

function Imagem(props) {
  return (
    <img src={props.foto} alt={`Portfolio ${props.id}`} />
  )
}

export default Imagem