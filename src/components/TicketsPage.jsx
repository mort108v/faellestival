import React, {useState, useContext} from "react";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import Main from "./sections/Main";
import CardGrid from "./sections/CardGrid";
import OrderForm from "./sections/OrderForm";



  function TicketsPage() {
  const ticketsData = useContext(TicketsContext);
  const [showForm, setShowForm] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  //check if there is tickets available
  const initialValue = 0;
  let sum = ticketsData.reduce((previousValue, currentValue) => previousValue + currentValue.available, initialValue)
  sum == 0 ? setSoldOut(true) : "" ;

  return (
  <section>
      <Main content="Tickets" bc="Main" />
      <CardGrid setShowForm={setShowForm} soldOut={soldOut} />
      {showForm && <OrderForm setShowForm={setShowForm} /> }
  </section>

  );
}

export default TicketsPage;
