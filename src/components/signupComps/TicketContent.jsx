import React from "react";
import CheckboxContent from "./CheckboxContent";

function TicketContent(props, index) {
  return (
    <div>
      <CheckboxContent props={props} key={index} />
    </div>
  );
}

export default TicketContent;
