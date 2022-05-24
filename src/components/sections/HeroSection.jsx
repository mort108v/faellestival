import React from "react";
import Header from "./Header.jsx";
import Timer from "../UI/Timer.jsx";
import HeroTxt from "./HeroTxt.jsx";
import BtnGrid from "./BtnGrid.jsx";
import ScrollElm from "./ScrollElm.jsx";


function HeroSection(props) {
  function showLineup() {
    console.log("showlineup");
    props.setShowLineup(true);
    props.setShowLandPage(false);
}
function showTickets() {
    props.setShowTicketsPage(true);
    props.setShowLandPage(false);
    console.log("showtickets");

}
  return (
      <section>
          <Header className="header" />
          <Timer />
          <HeroTxt />
          <BtnGrid {...props} btn1action={showLineup} btn1content="Line Up" btn2action={showTickets} btn2content="Tickets" />
          <ScrollElm />
      </section>
  );
}

export default HeroSection;
