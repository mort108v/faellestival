import React, { useState, useContext } from "react";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { AvailableContext } from "../Contexts/AvailableContext.js";
import MainSect from "./sections/MainSect";
import CardGrid from "./sections/CardGrid";
import OrderForm from "./sections/OrderForm";

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

  function goToMain() {
    props.setShowTicketsPage(false);
    props.setShowLandPage(true);

  }

  return (
  <section>
      <MainSect content="Tickets" bcReg="Main" action={goToMain} {...props} />
      <CardGrid ticketsContent={ticketsContent} setShowForm={setShowForm} soldOut={soldOut} />
      {showForm && <OrderForm setShowForm={setShowForm} /> }
  </section>

  );
}

export default TicketsPage;
