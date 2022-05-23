import React from "react";
import Btn from "../UI/Btn.jsx";
import FullLineup from "./FullLineup.jsx";
import styles from "../../scss/_landPage.scss";

function LineupSection(props) {
  function goToLineup() {
    console.log("work");
    props.setShowLandPage(false);
    props.setShowLineupPage(true);
  }
  return (
    <section>
      <FullLineup styles={styles.lineupTxt} />
      <p>And More...</p>
      <Btn content="Full Line Up" action={goToLineup} />
    </section>
  );
}

export default LineupSection;
