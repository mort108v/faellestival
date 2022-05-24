import React from "react";
import SectionTitle from "../UI/SectionTitle";
import BtnGrid from "./BtnGrid";

function FaqSection(props) {
  function showFaq() {
    console.log("show faq");
    props.setShowFaqPage(true);
    props.setShowLandPage(false);
  }
  function showTickets() {
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    console.log("showtickets");
  }
  return (
    <section>
      <SectionTitle content="Are you gonna Miss It?" />
      <BtnGrid
        {...props}
        btn1action={showFaq}
        btn1content="FAQ"
        btn2action={showTickets}
        btn2content="Get Your Tickets"
      />
    </section>
  );
}

export default FaqSection;
