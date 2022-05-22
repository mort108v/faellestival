import React from "react";
import HeroSection from "./HeroSection.jsx";
import LineupSection from "./LineupSection.jsx";
import BannerSection from "./BannerSection.jsx";
import FaqSection from "./FaqSection.jsx";

function LandingPage(props) {
  return (
<main>
  <HeroSection {...props}/>
  <LineupSection {...props} />
  <BannerSection />
  <FaqSection {...props}/>
</main>
  );
}

export default LandingPage;
