import React from "react";
import Btn from "../UI/Btn.jsx";
import FullLineup from "./FullLineup.jsx";
// import styles from "../../scss/sections/_lineup.scss";
// const styles = resolve('./')

function LineupSection(props) {
  function goToLineup() {
    console.log("work");
    props.setShowLandPage(false);
    props.setShowLineupPage(true);
  }
  return (
    <section className={"lineupTxt"}>
      <FullLineup />
      <p>And More...</p>
      <Btn content="Full Line Up" action={goToLineup} />
    </section>
  );
}

export default LineupSection;
