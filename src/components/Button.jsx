import React from "react";
// import buttonStyles from '../scss/_buttonstyles.scss'

function Button({ name, id, type, action }) {
  return (
    <button onClick={action} className={type} id={id}>
      {name}
    </button>
  );
}

export default Button;
