import React from "react";
import Header from "./SectionComps/Header.jsx";
import Timer from "./SectionComps/Timer.jsx";
import HeroTxt from "./SectionComps/HeroTxt.jsx";
import BtnGrid from "./SectionComps/BtnGrid.jsx";
import ScrollElm from "./SectionComps/ScrollElm.jsx";


function HeroSection(props) {
  return (
      <section>
          <Header setIsLogin={props.setIsLogin} />
          <Timer />
          <HeroTxt />
          <BtnGrid {...props} />
          <ScrollElm />
      </section>
  );
}

export default HeroSection;
