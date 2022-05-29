import React, { useState, useContext } from "react";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { AvailableContext } from "../Contexts/AvailableContext.js";
import MainSect from "./sections/MainSect";
import CardGrid from "./UI/CardGrid";
import OrderForm from "./sections/OrderForm";
//  import ticketContent from "./content.json?raw";

function TicketsPage(props) {
  const ticketsData = useContext(AvailableContext);
  const ticketsContent = useContext(TicketsContext);
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
  <main>
      <MainSect className="mainSect" content="Tickets" bcReg="Main" {...props} />
      <CardGrid className="cardGrid" ticketsContent={ticketsContent} setShowForm={setShowForm} soldOut={soldOut} />
      {showForm && <OrderForm setShowForm={setShowForm} /> }
  </main>
  );
}

export default TicketsPage;
