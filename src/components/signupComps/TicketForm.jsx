import React, { useState } from "react";
import ConfirmInfo from "./ConfirmInfo";
import TicketContent from "./TicketContent";
import PersonalInfo from "./PersonalInfo";
import ExtrasInfo from "./ExtrasInfo";
import CampInfo from "./CampInfo";

function TicketForm() {
  const [page, setPage] = useState(0);
  const [extrasData, setExtrasData] = useState({
    usersEmails: [],
    usersFirstNames: [],
    usersLastNames: [],
    usersIds: [],
    usersUnderage: [],
  });
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    confirmPassword: false,
    firstName: "",
    lastName: "",
    userName: "",
    checkoutTotal: "",
    authKey: "",
    ticketType: "",
    ticketDuration: "",
    ticketDay: "",
    agreeTerms: "",
    agreeSocial: "",
    ticketAmount: 0,
    isUnderage: false,
    cardFee: 0,
    campsite: "",
    tentSetup: 0,
    tentType: "",
    merchPack: 0,
    faellesCard: 0,
    extraGuests: {},
  });

  const FormTitles = [
    "Select Tickets",
    "Personal Info",
    "Choose Campsite",
    "Choose Extras",
    "Confirm Your E-mail",
    "Checkout Cart",
  ];
  const checkboxLabels = [
    "Standard Ticket",
    "VIP Ticket",
    "One Day",
    "Weekend",
    "Partout",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Merch Pack",
    "Tent Setup",
    "Agree to Terms",
    "Agree to Membership",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <TicketContent
          checkboxLabels={checkboxLabels}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          extrasData={extrasData}
          setExtrasData={setExtrasData}
        />
      );
    } else if (page === 2) {
      return <CampInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <ExtrasInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return (
        <ConfirmInfo
          formData={formData}
          setFormData={setFormData}
          checkboxLabels={checkboxLabels}
        />
      );
    } else if (page === 5) {
      return <TicketCheckout formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="ticket-form draw">
      <div className="progressbar transition-ease">
        <div
          className="transition-ease"
          style={{
            width:
              page === 0
                ? "16.6%"
                : page == 1
                ? "33.3%"
                : page == 2
                ? "50%"
                : page == 3
                ? "66.6%"
                : page == 4
                ? "83.3%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container ">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body ">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketForm;
