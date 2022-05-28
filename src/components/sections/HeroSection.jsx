import React from "react";
import Header from "./Header.jsx";
import Timer from "../UI/Timer.jsx";
import Title from "../UI/Title.jsx";
import BtnGrid from "../UI/BtnGrid.jsx";
import ScrollElm from "../UI/ScrollElm";


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
      <section className={props.className}>
          <Header className="header" />
          <Timer className="timer"/>
          <Title className="heroTxt" content="26 of July • Stenstrup" />
          <BtnGrid {...props} btn1action={showLineup} btn1content="Line Up" btn2action={showTickets} btn2content="Tickets" className="btnGrid" btn1className="secBtn" btn2className="secBtn" />
          <ScrollElm className="scrollElm down" />
      </section>
  );
}

export default HeroSection;
