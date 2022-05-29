import React from "react";
import TicketCard from "./TicketCard";

function CardGrid(props, index) {
  return (
    <div className={props.className} >
      {props.ticketsContent &&
        props.ticketsContent.map((ticket) => (
          <TicketCard
          cardClass="ticketCard"
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
