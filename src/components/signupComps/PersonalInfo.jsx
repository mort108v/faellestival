import React, { useState, useEffect } from "react";

function PersonalInfo({ formData, setFormData }) {
  const n = formData.ticketAmount;
  console.log(n);
  console.log(formData);

  const [guestArray, setGuestArray] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  ]);

  //  const GuestData = {
  //    firstNames: "",
  //    lastNames: "",
  //    emails: "",
  //  }

  let Guests = [
    { id: 1, firstName: "", lastName: "", email: "" },
    { id: 2, firstName: "", lastName: "", email: "" },
    { id: 3, firstName: "", lastName: "", email: "" },
    { id: 4, firstName: "", lastName: "", email: "" },
    { id: 5, firstName: "", lastName: "", email: "" },
    { id: 6, firstName: "", lastName: "", email: "" },
  ];

  function makeObject(data) {
    const guestData = Object.create(Guests);

    guestData.firstNames = data.firstName;
    guestData.lastNames = data.lastName;
    guestData.emails = data.email;
  }

  useEffect(() => {
    // let guests = [
    //   { id: 1, firstName: "", lastName: "", email: "" },
    //   { id: 2, firstName: "", lastName: "", email: "" },
    //   { id: 3, firstName: "", lastName: "", email: "" },
    //   { id: 4, firstName: "", lastName: "", email: "" },
    //   { id: 5, firstName: "", lastName: "", email: "" },
    //   { id: 6, firstName: "", lastName: "", email: "" },
    // ];
    setGuestArray(
      Guests.map((d) => {
        return {
          id: d.id,
          firstName: d.firstName,
          lastName: d.lastName,
          email: d.email,
        };
      })
    );
  }, []);

  return (
    <div className="personal-info-container">
      {guestArray.map((d, index) => (
        <div key={index}>
          <input
            type="text"
            id={d.id}
            placeholder="Guest First Name..."
            value={d.firstName}
            // lastName={d.lastName}
            // email={d.email}
            onChange={(event) => {
              makeObject(event.target.value);
            }}
          ></input>
          <div>
            <span>*Guest {n}</span>
          </div>
        </div>
      ))}
    </div>

    // <div className="personal-info-container">
    //   <input
    //     type="text"
    //     placeholder="Guest First Name..."
    //     value={formData.firstName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, firstName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Guest Last Name..."
    //     value={formData.lastName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, lastName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Guest e-mail..."
    //     value={formData.userEmail}
    //     onChange={(e) => {
    //       setFormData({ ...formData, userEmail: e.target.value });
    //     }}
    //   />
    // </div>
  );
}

export default PersonalInfo;
