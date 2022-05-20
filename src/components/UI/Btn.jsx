import React from 'react'

function Btn(props) {
    return (
<button onClick={props.action}>
    {props.content}
</button>
    )
}

export default Btn
