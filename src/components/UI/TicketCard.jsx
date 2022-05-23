import React from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import Btn from "./Btn";

function TicketCard(props) {
  function openForm() {
    props.setShowForm(true);
    console.log("OPEN FORM");
  }
  return (
    <div>
      <CardTitle head={props.head} />
      <section>
        <CardContent
          className={props.contentClass}
          content={props.content}
          price={props.price}
        />
        {props.soldOut ? (
          <Btn className="inactive" content="Sold Out" />
        ) : (
          <Btn
            className="primBtn"
            action={openForm}
            content="Get Your Ticket"
          />
        )}
      </section>
    </div>
  );
}

export default TicketCard;

