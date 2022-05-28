import React, { useState, useEffect } from "react";
import TicketAmountHandler from "./TicketAmountHandler";

function TicketContent({ formData, setFormData, checkboxLabels }) {
  const [typeIsChecked, setTypeIsChecked] = useState([]);

  useEffect(() => {
    let typeIsChecked = [
      { id: 1, ticketType: checkboxLabels[0] },
      { id: 2, ticketType: checkboxLabels[1] },
    ];

    setTypeIsChecked(
      typeIsChecked.map((d) => {
        return {
          select: false,
          ticketType: d.ticketType,
          id: d.id,
          value: d.ticketType,
        };
      })
    );
  }, []);

  return (
    <div className="ticket-container">
      <div className="check-header">
        <h2>Ticket Type</h2>
        <p>*Ticket type determines how many perks you have</p>
      </div>
      <div className="check-body ticket-type">
        {typeIsChecked.map((d, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={d.id}
              value={d.value}
              checked={d.select}
              onChange={(event) => {
                let checked = event.target.checked;
                setTypeIsChecked(
                  typeIsChecked.map((data) => {
                    if (d.id === data.id) {
                      data.select = checked;
                    } else {
                      data.select = !checked;
                    }
                    return data;
                  })
                );
                setFormData({ ...formData, ticketType: event.target.value });
              }}
            ></input>
            <div>
              <span>{d.value}</span>
            </div>
          </div>
        ))}
        <div>
          <TicketAmountHandler formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
}

export default TicketContent;
{
  /* <label>
  <input
    type="checkbox"
    name={checkboxLabels[0]}
    value={checkboxLabels[0]}
    checked={typeIsChecked}
    onChange={(e) => {
      let checked = e.target.checked;
      setFormData({ ...formData, ticketType: e.target.value });
    }}
  />
  {checkboxLabels[0]}
</label> */
}
{
  /* <div className="form-check vip">
<label>
  <input
    type="checkbox"
    value={checkboxLabels[1]}
    checked={typeIsChecked}
    onChange={(e) => {
      let checked = e.target.checked;

      setFormData({ ...formData, ticketType: e.target.value });
    }}
  />
  {checkboxLabels[1]}
</label>
</div> */
}
