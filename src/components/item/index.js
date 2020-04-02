import React from 'react'

function Item(props) {
    return (
        <li key={props.indice}>{props.item}</li>
    )
}

export default Item