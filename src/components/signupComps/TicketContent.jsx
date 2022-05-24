import React from "react";
import CheckboxHandler from "./CheckboxHandler";

function TicketContent(props, index) {
  return (
    <div>
      <CheckboxHandler content={props.content} name={props.name} key={index} />
    </div>
  );
}

export default TicketContent;
