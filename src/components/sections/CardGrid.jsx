import React from 'react';
import content from "/public/content.json";
import TicketCard from "../UI/TicketCard";

function CardGrid(props) {
    return (
        <div>
            {content.map((ticket) => <TicketCard contentClass="ticketContent" head={ticket.ticketOpt} content={ticket.specs} price={ticket.price} key={Math.random()} {...props} />)
}
        </div>
    )
}

export default CardGrid
