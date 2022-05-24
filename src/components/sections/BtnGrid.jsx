import React from 'react'
import Btn from "../UI/Btn.jsx";

function BtnGrid(props) {
    return (
        <div>
            <Btn content={props.btn1content} action={props.btn1action} /> 
            {props.btn2content && <Btn content={props.btn2content} action={props.btn2action} /> }

        </div>
    );
}

export default BtnGrid
