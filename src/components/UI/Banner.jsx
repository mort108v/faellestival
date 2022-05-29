import React from 'react';

function Banner(props) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

export default Banner