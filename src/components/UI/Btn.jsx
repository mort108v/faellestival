import React from 'react'

function Btn(props) {
    return (
<button className={props.className} onClick={props.action}>
    {props.content}
</button>
    )
}

export default Btn
