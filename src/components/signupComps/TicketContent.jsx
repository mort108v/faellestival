import React, { useState } from "react";
// import Checkbox from "./Checkbox";

function TicketContent({ formData, setFormData, checkboxLabels }) {
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   if (isSelected.name === checkboxLabels[0]) {
  //     setIsSelected(isSelected.name);
  //   }
  // }, []);

  //  const handleCheckboxChange = (formData) => {

  //  };

  //  const createCheckbox = (option, index) => (
  //   <Checkbox
  //     label={option}
  //     isSelected={false}
  //     onCheckboxChange={handleCheckboxChange}
  //     key={index}
  //   />
  // );
  // function handleTypeCheck() {

  // }

  return (
    <div className="ticket-container">
      <div className="check-header">
        <h2>Ticket Type</h2>
        <p>*The ticket type determines how many perks you have</p>
      </div>
      <div className="check-body ticket-type">
        <div className="form-check standard">
          <label>
            <input
              type="radio"
              name={checkboxLabels[0]}
              value={checkboxLabels[0]}
              checked={checked}
              onChange={(e) => {
                setChecked({ checked, checked: e.target.checked });
                setFormData({ ...formData, ticketType: e.target.value });
              }}
            />
            {checkboxLabels[0]}
          </label>
        </div>
        <div className="form-check vip">
          <label>
            <input
              type="radio"
              name={checkboxLabels[1]}
              value={checkboxLabels[1]}
              checked={checked}
              onChange={(e) => {
                setChecked({ checked, checked: e.target.checked });

                setFormData({ ...formData, ticketType: e.target.value });
              }}
            />
            {checkboxLabels[1]}
          </label>
        </div>
      </div>
    </div>
  );
}

export default TicketContent;
