import React from 'react';

function Banner(props) {
    return (
    <div>
        <img className="bannerImage" src={null} alt={null} />
        <p className={props.className}>
            {props.children}
        </p>
    </div>
    )
}

export default Banner