import React, {useState, useContext} from "react";

function TicketsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section>
      <Main content="Tickets" bc="Main" />
      <CardGrid setShowForm={setShowForm} />
      {showForm && <OrderForm setShowForm={setShowForm} /> }

    </section>
  );
}

export default TicketsPage;
