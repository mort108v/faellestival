import React from "react";
import TicketCard from "../UI/TicketCard";

function CardGrid(props) {
  const ticketContent = props.ticketContent;
  return (
    <div>
      {ticketContent.map((ticket) => (
        <TicketCard
          contentClass="ticketContent"
          head={ticket.ticketOpt}
          content={ticket.specs}
          price={ticket.price}
          key={Math.random()}
          {...props}
        />
      ))}
    </div>
  );
}

export default CardGrid;
