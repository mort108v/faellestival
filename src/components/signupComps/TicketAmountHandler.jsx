import React, { useState } from "react";

function TicketAmountHandler({ formData, setFormData }) {
  const [ticketAmount, setTicketAmount] = useState(0);

  function handleIncrement() {
    if (ticketAmount < 6) {
      setTicketAmount((prevCount) => prevCount + 1);
    } else {
      alert("You reached max amount of tickets");
    }
  }
  function handleDecrement() {
    if (ticketAmount > 0) {
      setTicketAmount((prevCount) => prevCount - 1);
    } else {
      return;
    }
  }

  return (
    <div className="incr-decr-container">
      <div className="incr-decr-header">
        <h3>Ticket Amount</h3>
        <p>*How many people are attending?</p>
      </div>
      <div className="incr-decr-body ticket-incr-decr">
        <button
          className="decrementBtn"
          type="button"
          onClick={handleDecrement}
        >
          <span> - </span>
        </button>
        <input
          type="number"
          name="counter"
          className="numberInput"
          onChange={(e) => {
            setFormData({ ...formData, ticketAmount: e.target.value });
          }}
          value={ticketAmount}
        />
        <button
          className="incrementBtn"
          type="button"
          onClick={handleIncrement}
        >
          <span> + </span>
        </button>
      </div>
    </div>
  );
}
export default TicketAmountHandler;
