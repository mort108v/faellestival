import React from "react";
import {useState} from "react" ;

function LandingPage(props) {
function handleButton1() {
  props.setShowLineup(true)
  props.setShowLandPage(false);
}
  return (
  <div>LandingPage
    <button onClick={handleButton1}>Im inside landing page , show lineup page</button>
  </div>
  );
}

export default LandingPage;
