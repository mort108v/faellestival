import React from "react";
import Header from "./Header.jsx";
import Timer from "../Timer.jsx";
import HeroTxt from "./HeroTxt.jsx";
import BtnGrid from "./BtnGrid.jsx";
import ScrollElm from "./ScrollElm.jsx";

import TimeTick from "./TimeTick.jsx";

function HeroSection(props) {
  return (
    <section>
      <Header className="header" setIsLogin={props.setIsLogin} />
      <TimeTick />
      <HeroTxt />
      <BtnGrid {...props} />
      <ScrollElm />
    </section>
  );
}

export default HeroSection;
