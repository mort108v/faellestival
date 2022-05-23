import React from "react";
import HeroSection from "./sections/HeroSection.jsx";
import LineupSection from "./sections/LineupSection.jsx";
import BannerSection from "./sections/BannerSection.jsx";
import FaqSection from "./sections/FaqSection.jsx";

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
