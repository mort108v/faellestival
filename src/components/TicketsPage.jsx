import React, { useState, useContext } from "react";
import { TicketsContext } from "../Contexts/TicketsContext";
import { AvailableContext } from "../Contexts/AvailableContext";
import Main from "./sections/Main";
import CardGrid from "./sections/CardGrid";
import OrderForm from "./sections/OrderForm";
//  import ticketContent from "./content.json?raw";

function TicketsPage(props) {
  const ticketsData = useContext(AvailableContext);
  const ticketContent = useContext(TicketsContext);
  const [showForm, setShowForm] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  //check if there is tickets available
  const initialValue = 0;
  let sum = ticketsData.reduce(
    (previousValue, currentValue) => previousValue + currentValue.available,
    initialValue
  );
  sum == 0 ? setSoldOut(true) : "";

  return (
    <section>
      <Main content="Tickets" bcReg="Main" {...props} />
      <CardGrid
        ticketContent={ticketContent}
        setShowForm={setShowForm}
        soldOut={soldOut}
      />
      {showForm && <OrderForm setShowForm={setShowForm} />}
    </section>
  );
}

export default TicketsPage;
