import React from "react";
import HeroSection from "./sections/HeroSection.jsx";
import LineupSection from "./sections/LineupSection.jsx";
import BannerSection from "./sections/BannerSection.jsx";
import FaqSection from "./sections/FaqSection.jsx";

function LandingPage(props) {
  return (
<main>
  <HeroSection className="heroSection" {...props}/>
  <LineupSection className="lineupSection" {...props} />
  <BannerSection className="bannerSection" />
  <FaqSection className="faqSection" {...props}/>
</main>
  );
}

export default LandingPage;
