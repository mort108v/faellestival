import React from 'react'

function FaqCard(props) {
  return (
    <div>
        <h3>Question:{props.qContent}</h3>
        <p>Answer:{props.aContent}</p>
    </div>
  )
}

export default FaqCard