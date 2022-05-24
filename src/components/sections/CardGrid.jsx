import React from "react";
import TicketCard from "../UI/TicketCard";

function CardGrid(props) {
  return (
    <div>
      {props.ticketsContent &&
        props.ticketsContent.map((ticket, index) => (
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
