import React from 'react'

function CardContent(props) {
  return (
<div>
<p>{props.content}</p>
{props.price && <p>From {props.price}kr.</p>}
</div>
  )
}

export default CardContent