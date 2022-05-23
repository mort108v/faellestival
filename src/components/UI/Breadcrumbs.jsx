import React from "react";

function Breadcrumbs(props) {
  return (
    <button className={props.breadCrumbs} onClick={props.action}>
      {" "}
      « Back to {props.bc} Page
    </button>
  );
}

export default Breadcrumbs;
