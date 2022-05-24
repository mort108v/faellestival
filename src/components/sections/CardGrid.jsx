import React from "react";
import TicketCard from "../UI/TicketCard";

function CardGrid(props, index) {
  return (
    <div>
      {props.ticketsContent &&
        props.ticketsContent.map((ticket) => (
          <TicketCard
            contentClass="ticketContent"
            head={ticket.ticketOpt}
            content={ticket.specs}
            price={ticket.price}
            key={index}
            {...props}
          />
        ))}
    </div>
  );
}

export default CardGrid;
