import React from 'react'

function CardContent(props) {
  return (
<div className="cardInfo">
<p>{props.content}</p>
{props.content2 && <p className="cardContent2" >{props.content2}</p>}
{props.price && <p className='cardPrice'>From {props.price}kr.</p>}
</div>
  )
}

export default CardContent