import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import TicketContent from "./TicketContent";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function TicketForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    other: "",
  });
  const [formTicketsData, setFormTicketsData] = useState({
    standard: false,
    vip: false,
    oneDay: false,
    weekend: false,
    partout: false,
    agreeTerms: false,
    agreeSocial: false,
    amount: 0,
  });
  const options = [
    "standard",
    "vip",
    "oneDay",
    "weekend",
    "partout",
    "agreeTerms",
    "agreeSocial",
  ];
  const divFill = [(className = "")];

  const FormTitles = ["Sign Up", "Select Tickets", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <TicketContent
          formTicketsData={formTicketsData}
          SetFormTicketsData={setFormTicketsData}
          options={options}
        />
      );
    } else if (page === 2) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
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
